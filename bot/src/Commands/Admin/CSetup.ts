import { NekoChanCommand } from "nekochan-framework";

type TPanel = "all";

export const command: NekoChanCommand.ICommand = {
    category: "Admin",
    description: "Setup a Quick-Access panel",
    name: "setup",
    options: [
        {
            name: "panel",
            description: "Type of Panel",
            type: 3,
            // @ts-ignore
            choices: [
                {
                    name: "NSFW & SFW Panel",
                    value: "all"
                }
            ]
        },
        {
            name: "bookmark",
            description: "Channel to bookmark image/gif posts",
            type: 7,
            channel_types: 0
        }
    ],
    type: 1,
    run: async (payload) => {
        const args: { bookmark?: string, panel?: TPanel } = {};

        for (const option of payload.interaction.data.options) {
            args[option.name] = (option as any).value as string;
        }

        if (args.panel === "all") {
            return new NekoChanCommand.Command(payload).setupPanelInteraction();
        }

        if (args.bookmark) {
            return new NekoChanCommand.Command(payload).setupBookmarkInteraction();           
        }
    }
}