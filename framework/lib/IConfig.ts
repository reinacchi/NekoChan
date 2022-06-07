interface IConfigAPI {
    FLUXPOINT: string;
}

interface IConfigBot {
    ADMIN: string[];
    PREFIX: string;
    TOKEN: string;
}

export interface IConfig {
    API: IConfigAPI;
    BOT: IConfigBot;
}
