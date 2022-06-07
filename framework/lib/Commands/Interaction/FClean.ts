import { CommandInteraction, TextableChannel } from "eris";
import { NekoChanClient } from "../../Client";
import { RichEmbed } from "../../Util";

/**
 * Sweep and clean messages. Max is 75 messages
 * @param client NekoChan Client
 * @param interaction Command Interaction
 * @returns {Promise<void>}
 */
export async function cleanInteraction(client: NekoChanClient, interaction: CommandInteraction<TextableChannel>) {
    const args: { limit?: number } = {};

    if (interaction.data.options) {
        for (const option of interaction.data.options) {
            args[option.name] = (option as any).value as string;
        }
    }

    const messageArray = (await client.getMessages(interaction.channel.id, { limit: args.limit ?? 75 })).filter((m) => !m.pinned).map((m) => m.id);
    const embed = new RichEmbed()
        .setColor(0xFFC0BC);

    if (!interaction.member.permissions.has("manageMessages")) {
        return interaction.createMessage({
            embeds: [embed.setDescription("You need the **Manage Messages** permission to run this command!")],
            flags: 64
        });
    }

    if (args.limit >= 76) {
        return interaction.createMessage({
            embeds: [embed.setDescription("Max message limit is **75**.")],
            flags: 64
        });
    }

    return client.deleteMessages(interaction.channel.id, messageArray).then(() => {
        return interaction.createMessage({
            embeds: [embed.setDescription(`Successfully deleted **${messageArray.length}** messages`)],
            flags: 64
        });
    });
}
