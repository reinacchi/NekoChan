import { ActionRow } from "eris";

export const panelComponent: ActionRow[] = [
    {
        components: [
            {
                custom_id: "sfw_panel",
                max_values: 1,
                min_values: 1,
                options: [
                    {
                        description: "Cute Azur Lane Image",
                        label: "Azur Lane Image",
                        value: "SFWAzurLaneImage"
                    },
                    {
                        description: "Cute Maid Image",
                        label: "Maid Image",
                        value: "SFWMaidImage"
                    },
                    {
                        description: "Cute Neko Image",
                        label: "Neko Image",
                        value: "SFWNekoImage"
                    }
                ],
                placeholder: "Select SFW Image/Gif",
                type: 3
            },
        ],
        type: 1
    },
    {
        components: [
            {
                custom_id: "nsfw_panel",
                max_values: 1,
                min_values: 1,
                options: [
                    {
                        description: "Lewd Neko Image",
                        label: "Neko Image",
                        value: "NSFWNekoImage"
                    },
                    {
                        description: "Lewd Yuri Image",
                        label: "Yuri Image",
                        value: "NSFWYuriImage"
                    },
                    {
                        description: "Lewd Yuri Gif",
                        label: "Yuri Gif",
                        value: "NSFWYuriGif"
                    }
                ],
                placeholder: "Select NSFW Image/Gif",
                type: 3
            }
        ],
        type: 1
    }
];
