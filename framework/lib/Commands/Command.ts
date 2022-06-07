import { ICommandRunPayload } from "./ICommand";
import { CommandInteraction, TextableChannel } from "eris";
import { NekoChanClient } from "../Client";
import { pingInteraction } from "./Interaction/FPing";
import { azurLaneISFWInteraction, maidISFWInteraction, nekoISFWInteraction } from "./Interaction/SFW";
import { registerCommandInteraction } from "./Interaction/FRegister";
import { cleanInteraction } from "./Interaction/FClean";
import { nekoINSFWInteraction, yuriGNSFWInteraction, yuriINSFWInteraction } from "./Interaction/NSFW";
import { setupPanelInteraction } from "./Interaction/FSetupPanel";
import { setupBookmarkInteraction } from "./Interaction/FSetupBookmark";

export class Command {

    /**
     * NekoChan Eris client
     */
    public client: NekoChanClient;

    /**
     * Eris Interaction
     */
    public interaction: CommandInteraction<TextableChannel>;

    /**
     * The whole command payload itself
     */
    public payload: ICommandRunPayload;

    /**
     * The main Command class
     * @param payload The command payload
     */
    constructor(payload: ICommandRunPayload) {
        this.client = payload.client;
        this.interaction = payload.interaction;
        this.payload = payload;
    }

    /**
     * Sends a SFW Azur Lane image
     * @returns {Promise<void>}
     */
    public azurLaneISFWInteraction() {
        return azurLaneISFWInteraction(this.client, this.interaction);
    }

    public cleanInteraction() {
        return cleanInteraction(this.client, this.interaction);
    }

    /**
     * Sends a SFW Maid image
     * @returns {Promise<void>}
     */
    public maidISFWInteraction() {
        return maidISFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a NSFW Neko image
     * @returns {Promise<void>}
     */
    public nekoINSFWInteraction() {
        return nekoINSFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a SFW Neko image
     * @returns {Promise<void>}
     */
    public nekoISFWInteraction() {
        return nekoISFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a ping message
     * @returns {Promise<void>}
     */
    public pingInteraction() {
        return pingInteraction(this.interaction);
    }

    /**
     * Register all slash commands in a guild
     * @returns {Promise<void>}
     */
    public registerCommandInteraction() {
        return registerCommandInteraction(this.client, this.interaction);
    }

    /**
     * Setup a bookmark channel
     * @returns {Promise<void>}
     */
    public setupBookmarkInteraction() {
        return setupBookmarkInteraction(this.client, this.interaction);
    }

    /**
     * Setup a Quick-Access panel
     * @returns {Promise<void>}
     */
    public setupPanelInteraction() {
        return setupPanelInteraction(this.client, this.interaction);
    }

    /**
     * Sends a NSFW Yuri gif
     * @returns {Promise<void>}
     */
    public yuriGNSFWInteraction() {
        return yuriGNSFWInteraction(this.client, this.interaction);
    }

    /**
     * Sends a NSFW Yuri image
     *
     */
    public yuriINSFWInteraction() {
        return yuriINSFWInteraction(this.client, this.interaction);
    }
}
