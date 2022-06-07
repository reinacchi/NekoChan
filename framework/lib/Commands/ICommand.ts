import { ApplicationCommandOption, CommandInteraction, TextableChannel } from "eris";
import { NekoChanClient } from "../Client";

type TCategory = "Admin" | "General" | "NSFW" | "SFW";

export interface ICommandRunPayload {
    client: NekoChanClient;
    interaction: CommandInteraction<TextableChannel>;
}

export interface ICommandRun {
    (payload: ICommandRunPayload);
}

export interface ICommand {
    adminOnly?: boolean;
    category: TCategory;
    description: string;
    name: string;
    nsfwOnly?: boolean;
    options?: ApplicationCommandOption<any>[];
    ownerOnly?: boolean;
    run: ICommandRun;
    type: 1;
}
