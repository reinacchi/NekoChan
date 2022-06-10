import { NekoChanCommand } from "nekochan-framework";

type TGifType = "NekoGif" | "YuriGif";
type TImageType = "AzurLaneImage" | "NekoImage" | "NekoParaImage" | "YuriImage";

export const command: NekoChanCommand.ICommand = {
    category: "NSFW",
    description: "Sends cute SFW images",
    name: "nsfw",
    nsfwOnly: true,
    options: [
        {
            name: "image",
            description: "NSFW Image",
            type: 3,
            // @ts-ignore
            choices: [
                {
                    name: "Azur Lane",
                    value: "AzurLaneImage"
                },
                {
                    name: "Neko",
                    value: "NekoImage"
                },
                {
                    name: "NekoPara",
                    value: "NekoParaImage"
                },
                {
                    name: "Yuri",
                    value: "YuriImage"
                },
            ]
        },
        {
            name: "gif",
            description: "NSFW Gif",
            type: 3,
            // @ts-ignore
            choices: [
                {
                    name: "Yuri",
                    value: "YuriGif"
                }
            ]
        }
    ],
    type: 1,
    run: async (payload) => {
        const args: { gif?: TGifType, image?: TImageType } = {};
        const command = new NekoChanCommand.Command(payload);

        for (const option of payload.interaction.data.options) {
            args[option.name] = (option as any).value as string;
        }

        if (args.image) {
            switch (args.image) {
                case "AzurLaneImage":
                    command.azurLaneINSFWInteraction();
                    break;
                case "NekoImage":
                    command.nekoINSFWInteraction();
                    break;
                case "NekoParaImage":
                    command.nekoParaINSFWInteraction();
                    break;
                case "YuriImage":
                    command.yuriINSFWInteraction();
                    break;
            }
        }

        if (args.gif) {
            switch (args.gif) {
                case "YuriGif":
                    command.yuriGNSFWInteraction();
            }
        }
    }
}
