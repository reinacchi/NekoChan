import { ICommandRunPayload } from "./ICommand";
import { CommandInteraction, TextableChannel } from "eris";
import { NekoChanClient } from "../Client";
import { pingInteraction } from "./Interaction/FPing";
import { azurLaneISFWInteraction, maidISFWInteraction, nekoISFWInteraction, nekoParaISFWInteraction } from "./Interaction/SFW";
import { registerCommandInteraction } from "./Interaction/FRegister";
import { cleanInteraction } from "./Interaction/FClean";
import { azurLaneINSFWInteraction, kitsuneINSFWInteraction, nekoINSFWInteraction, nekoParaINSFWInteraction, trapINSFWInteraction, yuriGNSFWInteraction, yuriINSFWInteraction } from "./Interaction/NSFW";
import { setupPanelInteraction } from "./Interaction/FSetupPanel";
import { setupBookmarkInteraction } from "./Interaction/FSetupBookmark";

export class Command {

    /**
     * NekoChan Eris client
     * @private
     */
    private client: NekoChanClient;

    /**
     * Eris Interaction
     * @private
     */
    private interaction: CommandInteraction<TextableChannel>;

    /**
     * The main Command class
     * @param payload The command payload
     */
    constructor(payload: ICommandRunPayload) {
        this.client = payload.client;
        this.interaction = payload.interaction;
    }

    /**
     * Sends a NSFW Azur Lane image
     * @returns {Promise<void>}
     */
    public azurLaneINSFWInteraction() {
        return azurLaneINSFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a SFW Azur Lane image
     * @returns {Promise<void>}
     */
    public azurLaneISFWInteraction(): Promise<void> {
        return azurLaneISFWInteraction(this.client, this.interaction);
    }

    /**
     * Sweep and clean messages. Max is 75 messages
     * @returns {Promise<void>}
     */
    public cleanInteraction(): Promise<void> {
        return cleanInteraction(this.client, this.interaction);
    }

    /**
     * Sends a NSFW Kitsune image
     * @returns {Promise<void>}
     */
    public kitsuneINSFWInteraction(): Promise<void> {
        return kitsuneINSFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a SFW Maid image
     * @returns {Promise<void>}
     */
    public maidISFWInteraction(): Promise<void> {
        return maidISFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a NSFW Neko image
     * @returns {Promise<void>}
     */
    public nekoINSFWInteraction(): Promise<void> {
        return nekoINSFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a NSFW NekoPara image
     * @returns {Promise<void>}
     */
    public nekoParaINSFWInteraction(): Promise<void> {
        return nekoParaINSFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a SFW Neko image
     * @returns {Promise<void>}
     */
    public nekoISFWInteraction(): Promise<void> {
        return nekoISFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a SFW NekoPara image
     * @returns {Promise<void>}
     */
    public nekoParaISFWInteraction(): Promise<void> {
        return nekoParaISFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a ping message
     * @returns {Promise<void>}
     */
    public pingInteraction(): Promise<void> {
        return pingInteraction(this.interaction);
    }

    /**
     * Register all slash commands in a guild
     * @returns {Promise<void>}
     */
    public registerCommandInteraction(): Promise<void> {
        return registerCommandInteraction(this.client, this.interaction);
    }

    /**
     * Setup a bookmark channel
     * @returns {Promise<void>}
     */
    public setupBookmarkInteraction(): Promise<void> {
        return setupBookmarkInteraction(this.client, this.interaction);
    }

    /**
     * Setup a Quick-Access panel
     * @returns {Promise<void>}
     */
    public setupPanelInteraction(): Promise<void> {
        return setupPanelInteraction(this.client, this.interaction);
    }

    /**
     * Sends a NSFW Trap image
     * @returns {Promise<void>}
     */
    public trapINSFWInteraction(): Promise<void> {
        return trapINSFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a NSFW Yuri gif
     * @returns {Promise<void>}
     */
    public yuriGNSFWInteraction(): Promise<void> {
        return yuriGNSFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a NSFW Yuri image
     * @returns {Promise<void>}
     */
    public yuriINSFWInteraction(): Promise<void> {
        return yuriINSFWInteraction(this.client, this.interaction);
    }
}
