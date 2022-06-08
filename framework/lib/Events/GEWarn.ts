import { IEvent } from "./IEvent";

export const event: IEvent = {
    name: "warn",
    run: async (client, err: string, shardID: number) => {
        client.logger.warn({ message: err, subTitle: "NekoChanFramework::Events::Warn", title: `SHARD ${shardID ?? "N/A"}` });
    }
};
