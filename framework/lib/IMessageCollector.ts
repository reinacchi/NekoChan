import { Message, TextableChannel } from "eris";

export interface IMessageCollector {
    count?: number;
    timeout?: number;
    filter?: (msg: Message<TextableChannel>) => boolean;
}
