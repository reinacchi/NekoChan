import { ActivityPartial, BotActivityType, Status } from "eris";

export interface IClientOptions {
    presence?: {
        status?: Status;
        activities?: ActivityPartial<BotActivityType> | ActivityPartial<BotActivityType>[];
    }
}
