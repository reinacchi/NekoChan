import { NekoChanClient } from "nekochan-framework";
import * as Config from "../../config/config.json";

const client = new NekoChanClient(Config.BOT.TOKEN, {
    intents: [
        "guilds",
        "guildMembers",
        "guildMessages"
    ]
});

client.config = Config;
client.initaliseClient({
    presence: {
        status: "idle",
        activities: {
            name: "Neko ヾ(≧▽≦*)o",
            type: 0
        }
    }
});

client.initialiseCommands();
client.intialiseEvents();
