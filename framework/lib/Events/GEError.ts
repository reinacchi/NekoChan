import { Logger } from "../Util";
import { IEvent } from "./IEvent";

export const event: IEvent = {
    name: "error",
    run: async (client, err: string, shardID: number) => {
        client.logger.error({ message: err, subTitle: "NekoChanFramework::Events::Error", title: `SHARD ${shardID ?? "N/A"}` });
    }
};

process.on("unhandledRejection", (err: string) => {
    const logger = new Logger();

    logger.error({ message: err, subTitle: "TypeScript::Error", title: "UNHANDLED REJECTION" });
});
