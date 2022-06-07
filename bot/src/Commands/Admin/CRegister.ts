import { NekoChanCommand } from "nekochan-framework";

export const command: NekoChanCommand.ICommand = {
    category: "Admin",
    description: "Register all slash commands",
    name: "register",
    type: 1,
    run: async (payload) => {
        return new NekoChanCommand.Command(payload).registerCommandInteraction();
    }
}