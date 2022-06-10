import { NekoChanCommand } from "nekochan-framework";
import { RichEmbed } from "nekochan-framework/src/Util";

type TImageType = "AzurLaneImage" | "MaidImage" | "NekoImage" | "NekoParaImage";

export const command: NekoChanCommand.ICommand = {
    category: "SFW",
    description: "Sends cute SFW images",
    name: "sfw",
    options: [
        {
            name: "image",
            description: "SFW Neko Image",
            type: 3,
            // @ts-ignore
            choices: [
                {
                    name: "Azur Lane",
                    value: "AzurLaneImage"
                },
                {
                    name: "Maid",
                    value: "MaidImage"
                },
                {
                    name: "Neko",
                    value: "NekoImage"
                },
                {
                    name: "NekoPara",
                    value: "NekoParaImage"
                }
            ]
        }
    ],
    type: 1,
    run: async (payload) => {
        const args: { image?: TImageType } = {};
        const command = new NekoChanCommand.Command(payload);
        
        for (const option of payload.interaction.data.options) {
            args[option.name] = (option as any).value as string;
        }

        switch (args.image) {
            case "AzurLaneImage":
                command.azurLaneISFWInteraction();
                break;
            case "MaidImage":
                command.maidISFWInteraction();
                break;
            case "NekoImage":
                command.nekoISFWInteraction();
                break;
            case "NekoParaImage":
                command.nekoParaISFWInteraction();
                break;
            default:
                payload.interaction.createMessage({
                    embeds: [new RichEmbed().setColor(0xFFC0BC).setDescription("This options is unknown!")],
                    flags: 64
                });
        } 
    }
}