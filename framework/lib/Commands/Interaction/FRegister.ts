import { NekoChanClient } from "../../Client";
import { CommandInteraction, TextableChannel } from "eris";
import { RichEmbed } from "../../Util";

/**
 * Register all slash commands in a guild
 * @param client NekoChan Client
 * @param interaction Command Interaction
 * @returns {Promise<void>}
 */
export function registerCommandInteraction(client: NekoChanClient, interaction: CommandInteraction<TextableChannel>) {
    const command = client.commands.filter((cmd) => cmd.name !== "register");
    const embed = new RichEmbed()
        .setColor(0xFFC0BC);

    if (!interaction.member.guild) {
        return interaction.createMessage({
            embeds: [embed.setDescription("This command can only be use in server!")],
            flags: 64
        });
    }

    if (!interaction.member.permissions.has("manageGuild")) {
        return interaction.createMessage({
            embeds: [embed.setDescription("You need the **Manage Server** permission to run this command!")],
            flags: 64
        });
    }

    command.forEach((cmd) => {
        client.createGuildCommand(interaction.guildID, {
            description: cmd.description,
            name: cmd.name,
            options: cmd.options,
            type: cmd.type
        });
    });

    return interaction.createMessage({
        embeds: [embed.setDescription("Successfully registered all slash commands!")],
        flags: 64
    });
}
