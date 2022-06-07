import { CommandInteraction, TextableChannel } from "eris";
import { RichEmbed } from "../../Util/RichEmbed";

/**
 * Ping the bot
 * @param interaction Command Interaction
 * @returns {Promise<void>}
 */
export function pingInteraction(interaction: CommandInteraction<TextableChannel>) {
    const embed = new RichEmbed()
        .setColor(0xFFC0BC)
        .setDescription(`🏓 Pong! | ${interaction.member.guild.shard.latency}ms`);

    return interaction.createMessage({
        embeds: [embed],
        flags: 64
    });
}
