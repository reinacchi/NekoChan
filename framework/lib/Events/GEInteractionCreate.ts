import { CommandInteraction, TextableChannel } from "eris";
import { RichEmbed } from "../Util";
import { IEvent } from "./IEvent";

export const event: IEvent = {
    name: "interactionCreate",
    run: async (client, interaction: CommandInteraction<TextableChannel>) => {
        const command = client.commands.get(interaction.data.name);

        if (!interaction.guildID) return;

        if (command && interaction.type === 2) {
            if (command.nsfwOnly && client.config.BOT.ADMIN.includes(interaction.member.id)) {
                return command.run({ client, interaction });
            }

            if (command.nsfwOnly) {
                const embed = new RichEmbed()
                    .setColor(0xFFC0BC)
                    .setDescription("This command is marked as **NSFW** only.");

                return interaction.createMessage({
                    embeds: [embed],
                    flags: 64
                });
            }

            return command.run({ client, interaction });
        }
    }
};
