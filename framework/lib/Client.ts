import { Client, TextableChannel } from "eris";
import { FluxpointClient } from "fluxpoint-js";
import { Collection } from "./Util/Collection";
import { Database } from "xen.db";
import { ICommand } from "./Commands/ICommand";
import { IConfig } from "./IConfig";
import { IClientOptions } from "./IClientOptions";
import { IEvent } from "./Events/IEvent";
import { IMessageCollector } from "./IMessageCollector";
import { Logger } from "./Util/Logger";
import { MessageCollector } from "./MessageCollector";
import { join } from "path";
import { readdirSync } from "fs";

export class NekoChanClient extends Client {
    /**
     * Collection of the bot's commands
     */
    public commands: Collection<ICommand> = new Collection<ICommand>();

    /**
     * The configuration setting
     */
    public config: IConfig;

    /**
     * The database used
     */
    public database: Database = new Database("src/Database/NekoAexis.sqlite", { path: "src/Database", table: "NekoAexis", useWalMode: false });

    /**
     * Collection of the bot's gateway events
     */
    public events: Collection<IEvent> = new Collection<IEvent>();

    /**
     * Fluxpoint API client
     */
    public fluxpoint: FluxpointClient;

    /**
     * Custom built-in logger to log events
     */
    public logger: Logger = new Logger();

    /**
     * Creates a message collector in a channel
     * @param channel The channel to collect messages
     * @param options Message Collector Options
     * @returns {MessageCollector}
     */
    public awaitChannelMessages(channel: TextableChannel, options: IMessageCollector): MessageCollector {
        return new MessageCollector(channel, options);
    }

    /**
     * Initialise NekoChan Eris client and connect to Discord gateway
     * @param options Client Options
     */
    public initaliseClient(options: IClientOptions): Promise<void> {
        if (options.presence) {
            this.editStatus(options.presence.status, options.presence.activities);
        }

        this.fluxpoint = new FluxpointClient({ token: this.config.API.FLUXPOINT });

        return this.connect();
    }

    /**
     * Initialise and load all commands
     */
    public initialiseCommands(): void {
        const commandPath = join(__dirname, "..", "..", "bot", "src", "Commands");

        readdirSync(commandPath).forEach(async (dir) => {
            const files = readdirSync(`${commandPath}/${dir}`).filter((file) => file.endsWith(".ts"));

            for (const file of files) {
                const { command } = await import(`${commandPath}/${dir}/${file}`);

                this.commands.set(command.name, command);
            }
        });

        setTimeout(() => {
            return this.logger.success({ message: `Loaded ${this.commands.size} Commands`, subTitle: "NekoChanFramework::Collection::Commands", title: "CLIENT" });
        }, 3000);
    }

    /**
     * Initialise and load all gateway events
     */
    public intialiseEvents(): void {
        const eventPath = join(__dirname, "Events");

        readdirSync(eventPath).filter((file) => file.startsWith("GE") && file.endsWith(".js")).forEach(async (file) => {
            const { event } = await import(`${eventPath}/${file}`);

            this.events.set(event.name, event);
            this.on(event.name, event.run.bind(null, this));
        });

        setTimeout(() => {
            return this.logger.success({ message: `Loaded ${this.events.size} Gateway Events`, subTitle: "NekoChanFramework::Collection::Events", title: "CLIENT" });
        }, 3000);
    }
}
