import { IEvent } from "./IEvent";

export const event: IEvent = {
    name: "debug",
    run: async (client, message: string, shardID: number) => {
        client.logger.log({ colour: "#FFDD1C", message, subTitle: "NekoChanFramework::Events::Debug", title: `SHARD ${shardID ?? "N/A"}`, type: "DEBUG" });
    }
};
