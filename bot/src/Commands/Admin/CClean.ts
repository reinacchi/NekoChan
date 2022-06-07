import { NekoChanCommand } from "nekochan-framework";

export const command: NekoChanCommand.ICommand = {
    category: "Admin",
    description: "Sweep and clean messages",
    name: "clean",
    options: [
        {
            name: "limit",
            type: 4,
            description: "The max limit of messate to be deleted",
            channel_types: null
        }
    ],
    type: 1,
    run: async (payload) => {
        return new NekoChanCommand.Command(payload).cleanInteraction();
    }
}