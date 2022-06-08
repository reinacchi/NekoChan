import { ComponentInteraction, TextableChannel } from "eris";
import { IEvent } from "./IEvent";
import { RichEmbed } from "../Util";
import { azurLaneISFWInteraction, maidISFWInteraction, nekoISFWInteraction } from "../Commands/Interaction/SFW";
import { azurLaneINSFWInteraction, nekoINSFWInteraction, yuriGNSFWInteraction, yuriINSFWInteraction } from "../Commands/Interaction/NSFW";
import { panelComponent } from "../DefaultComponent";

type TSFWImage = "SFWAzurLaneImage" | "SFWMaidImage" | "SFWNekoGif" | "SFWNekoImage";
type TNSFWImage = "NSFWAzurLaneImage" | "NSFWNekoGif" | "NSFWNekoImage" | "NSFWYuriGif" | "NSFWYuriImage";

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
                    if (interaction.message.id !== client.database.fetch(`Panel.${interaction.guildID}.MessageID`)) {
                        return interaction.createMessage({
                            embeds: [new RichEmbed().setColor(0xFFC0BC).setDescription("This panel might be outdated. Please setup panel again with the `/setup` slash command")],
                            flags: 64
                        });
                    }

                    switch ((interaction.data as any).values[0] as TSFWImage) {
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

                    client.editMessage(interaction.channel.id, client.database.fetch(`Panel.${interaction.guildID}.MessageID`) as string, {
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

                    if (interaction.message.id !== client.database.fetch(`Panel.${interaction.guildID}.MessageID`)) {
                        return interaction.createMessage({
                            embeds: [new RichEmbed().setColor(0xFFC0BC).setDescription("This panel might be outdated. Please setup panel again with the `/setup` slash command")],
                            flags: 64
                        });
                    }

                    switch ((interaction.data as any).values[0] as TNSFWImage) {
                        case "NSFWAzurLaneImage":
                            azurLaneINSFWInteraction(client, interaction, true);
                            break;
                        case "NSFWNekoImage":
                            nekoINSFWInteraction(client, interaction, true);
                            break;
                        case "NSFWYuriImage":
                            yuriINSFWInteraction(client, interaction, true);
                            break;
                        case "NSFWYuriGif":
                            yuriGNSFWInteraction(client, interaction, true);
                    }

                    client.editMessage(interaction.channel.id, client.database.fetch(`Panel.${interaction.guildID}.MessageID`) as string, {
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
