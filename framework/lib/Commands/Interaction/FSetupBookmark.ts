import { CommandInteraction, TextableChannel } from "eris";
import { NekoChanClient } from "../../Client";
import { RichEmbed } from "../../Util";

export function setupBookmarkInteraction(client: NekoChanClient, interaction: CommandInteraction<TextableChannel>) {
    const args: { bookmark?: string } = {};

    for (const option of interaction.data.options) {
        args[option.name] = (option as any).value as string;
    }

    const embed = new RichEmbed()
        .setColor(0xFFC0BC)
        .setDescription(`<#${args.bookmark}> is now the main bookmark channel.`);

    client.database.set(`Bookmark.${interaction.guildID}`, args.bookmark);

    return interaction.createMessage({
        embeds: [embed]
    });
}
