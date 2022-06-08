import { CommandInteraction, TextableChannel } from "eris";
import { NekoChanClient } from "../../Client";
import { panelComponent } from "../../DefaultComponent";
import { RichEmbed } from "../../Util";

export async function setupPanelInteraction(client: NekoChanClient, interaction: CommandInteraction<TextableChannel>) {
    const embed = new RichEmbed()
        .setColor(0xFFC0BC);

    const panelEmbed = new RichEmbed()
        .setColor(0xFFC0BC)
        .setDescription("Access to images in clicks only.")
        .setFooter("Last Used")
        .setTimestamp()
        .setTitle("NekoChan's Quick-Access Panel");

    if (!interaction.member.permissions.has("manageGuild")) {
        return interaction.createMessage({
            embeds: [embed.setDescription("You need the **Manage Server** permission to run this command!")],
            flags: 64
        });
    }

    const msg = await interaction.channel.createMessage({
        components: panelComponent,
        embed: panelEmbed
    });

    client.database.set(`Panel.${interaction.guildID}.MessageID`, msg.id);
    return interaction.createMessage({
        embeds: [embed.setDescription("Successfully setup the panel.")],
        flags: 64
    });
}
