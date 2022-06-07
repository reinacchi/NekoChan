import { ClientEvents } from "eris";
import { NekoChanClient } from "../Client";

export interface IEventRun {
    (client: NekoChanClient, ...args: any);
}

export interface IEvent {
    name: keyof ClientEvents;
    run: IEventRun;
}
