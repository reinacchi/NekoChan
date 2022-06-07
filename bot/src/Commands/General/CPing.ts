import { NekoChanCommand } from "nekochan-framework";

export const command: NekoChanCommand.ICommand = {
    category: "General",
    description: "Ping the bot",
    name: "ping",
    type: 1,
    run: async (payload) => {
        return new NekoChanCommand.Command(payload).pingInteraction();
    }
}