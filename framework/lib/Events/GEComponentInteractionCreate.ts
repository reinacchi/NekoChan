import { ComponentInteraction, TextableChannel } from "eris";
import { IEvent } from "./IEvent";
import { RichEmbed } from "../Util";
import { azurLaneISFWInteraction, maidISFWInteraction, nekoISFWInteraction } from "../Commands/Interaction/SFW";
import { nekoINSFWInteraction, yuriGNSFWInteraction, yuriINSFWInteraction } from "../Commands/Interaction/NSFW";
import { panelComponent } from "../DefaultComponent";

type TOptionType = "NSFWNekoGif" | "NSFWNekoImage" | "NSFWYuriGif" | "NSFWYuriImage" | "SFWAzurLaneImage" | "SFWMaidImage" | "SFWNekoGif" | "SFWNekoImage";

export const event: IEvent = {
    name: "interactionCreate",
    run: async (client, interaction: ComponentInteraction<TextableChannel>) => {
        const panelEmbed = new RichEmbed()
            .setColor(0xFFC0BC)
            .setDescription("Access to images in clicks only.")
            .setFooter("Last Used")
            .setTimestamp()
            .setTitle("NekoChan's Quick-Access Panel");

        if (interaction.type === 3) {
            switch (interaction.data.custom_id) {
                case "sfw_panel":
                    switch ((interaction.data as any).values[0] as TOptionType) {
                        case "SFWAzurLaneImage":
                            azurLaneISFWInteraction(client, interaction, true);
                            break;
                        case "SFWMaidImage":
                            maidISFWInteraction(client, interaction, true);
                            break;
                        case "SFWNekoImage":
                            nekoISFWInteraction(client, interaction, true);
                            break;
                    }

                    client.editMessage(interaction.channel.id, client.database.fetch(`SFWPanel.${interaction.guildID}.MessageID`) as string, {
                        components: panelComponent,
                        embed: panelEmbed
                    });

                    break;
                case "nsfw_panel":
                    // if (!(interaction.channel as TextChannel).nsfw) {
                    //     return interaction.createMessage({
                    //         embeds: [new RichEmbed().setColor(0xFFC0BC).setDescription("Please set this channel to **Age-Restricted**.")],
                    //         flags: 64
                    //     })
                    // }

                    switch ((interaction.data as any).values[0] as TOptionType) {
                        case "NSFWNekoImage":
                            nekoINSFWInteraction(client, interaction, true);
                            break;
                        case "NSFWYuriImage":
                            yuriINSFWInteraction(client, interaction, true);
                            break;
                        case "NSFWYuriGif":
                            yuriGNSFWInteraction(client, interaction, true);
                    }

                    client.editMessage(interaction.channel.id, client.database.fetch(`SFWPanel.${interaction.guildID}.MessageID`) as string, {
                        components: panelComponent,
                        embed: panelEmbed
                    });

                    break;
                case "save_post":
                    interaction.createMessage({
                        embeds: [new RichEmbed().setColor(0xFFC0BC).setDescription(`Successfully saved image post at <#${client.database.fetch(`Bookmark.${interaction.guildID}`)}>. Click [Here](https://discord.com/channels/${interaction.guildID}/${client.database.fetch(`Bookmark.${interaction.guildID}`)}/${interaction.message.id}) to view them.`)],
                        flags: 64
                    });

                    client.createMessage(client.database.fetch(`Bookmark.${interaction.guildID}`), {
                        embeds: interaction.message.embeds
                    });
            }
        }
    }
};