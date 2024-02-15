import {
    IAppAccessors,
    IConfigurationExtend,
    IEnvironmentRead,
    IHttp,
    ILogger,
    IModify,
    IPersistence,
    IRead,
} from "@rocket.chat/apps-engine/definition/accessors";
import { App } from "@rocket.chat/apps-engine/definition/App";
import { IAppInfo } from "@rocket.chat/apps-engine/definition/metadata";
import {
    IPostRoomUserJoined,
    IRoomUserJoinedContext,
} from "@rocket.chat/apps-engine/definition/rooms";
import { GetInfo } from "./slashcommands/GetInfo";
import { SettingType } from "@rocket.chat/apps-engine/definition/settings";

const getApiUrl = () => "http://mistral-7b/v1/chat/completions";
const getPayload = (name, userId) => {
    const prompt = `Welcome New OpenSource Contributor named ${name} to RocketChat Community with welcome message, don't include any twitter like hashtags,gsoc2024 is the channel is used for introduction, channels having initials as "idea" are google summer of code project ideas channel. Don't make message too long and instruct this contributor to change their username in form: "firstname.lastname".`;
    const data = {
        messages: [
            {
                role: "user",
                content: prompt,
                user: userId,
            },
        ],
        model: "mistral",
    };
    const headers = {
        "Content-Type": "application/json",
    };

    return {
        data,
        headers,
    };
};

export class WelcomeBotApp extends App implements IPostRoomUserJoined {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }
    async executePostRoomUserJoined(
        context: IRoomUserJoinedContext,
        read: IRead,
        http: IHttp,
        persistence: IPersistence,
        modify?: IModify | undefined
    ): Promise<void> {
        const roomsStr = await read
            .getEnvironmentReader()
            .getSettings()
            .getValueById("welcome_rooms");

        if (!roomsStr) {
            return;
        }

        const rooms: string[] = roomsStr.split(",").map((room) => room.trim());
        if (!rooms.includes(context.room.slugifiedName)) {
            return;
        }

        const { name, id } = context.joiningUser;

        try {
            const response = await http.post(getApiUrl(), getPayload(name, id));

            const welcomeMessage =
                response?.data?.choices[0]?.message?.content ??
                `Welcome ${name}! to RocketChat Let's make great things happen 🌟`;

            this.getLogger().log(response);

            if (modify) {
                const message = await modify
                    .getCreator()
                    .startMessage()
                    .setRoom(context.room)
                    .setText(welcomeMessage);

                await modify.getCreator().finish(message);
            }
        } catch (err) {
            this.getLogger().error("Error While User Joining!");
        }
    }

    protected async extendConfiguration(
        configuration: IConfigurationExtend,
        environmentRead: IEnvironmentRead
    ): Promise<void> {
        await configuration.slashCommands.provideSlashCommand(new GetInfo());
        await configuration.settings.provideSetting({
            id: "welcome_rooms",
            type: SettingType.STRING,
            packageValue: "",
            required: false,
            public: false,
            i18nLabel: "Allowed Rooms (Comma Separated)",
            i18nDescription: "Only welcome users in these rooms.",
        });
    }
}
