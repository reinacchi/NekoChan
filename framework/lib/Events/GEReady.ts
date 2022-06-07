import { IEvent } from "./IEvent";

export const event: IEvent = {
    name: "ready",
    run: async (client) => {
        if (client.ready) {
            client.logger.info({ message: `${client.user.username}#${client.user.discriminator} Connected To Gateway`, subTitle: "NekoChanFramework::Events::Ready", title: "GATEWAY" });
        }
    }
};
