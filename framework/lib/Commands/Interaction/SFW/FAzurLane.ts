import { ImagesSFW } from "fluxpoint-js";
import { CommandInteraction, ComponentInteraction, TextableChannel } from "eris";
import { NekoChanClient } from "../../../Client";
import { RichEmbed } from "../../../Util";

/**
 * SFW Azur Lane image
 * @param client NekoChan Client
 * @param interaction Eris Interaction
 * @param panelMode Whether panel mode is enabled or not
 * @returns {Promise<void>}
 */
export async function azurLaneISFWInteraction(client: NekoChanClient, interaction: CommandInteraction<TextableChannel> | ComponentInteraction<TextableChannel>, panelMode = false) {
    const response = await (new ImagesSFW(client.fluxpoint).getAzurlane());
    const embed = new RichEmbed()
        .setAuthor(`Image ID: ${response.id}`, response.file)
        .setColor(0xFFC0BC)
        .setFooter(`Requested By: ${interaction.member.username}#${interaction.member.discriminator}`)
        .setTimestamp()
        .setImage(response.file)
        .setTitle("Azur Lane Image");

    if (panelMode) {
        return interaction.createMessage({
            components: [
                {
                    components: [
                        {
                            custom_id: "save_post",
                            label: "Save",
                            style: 1,
                            type: 2
                        },
                        { 
                            label: "Source",
                            style: 5,
                            type: 2,
                            url: response.file
                        }
                    ],
                    type: 1
                }
            ],
            embeds: [embed],
            flags: 64
        });
    } else {
        return interaction.createMessage({
            embeds: [embed]
        });
    }
}
