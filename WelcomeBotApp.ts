import {
    IAppAccessors,
    IConfigurationExtend,
    IEnvironmentRead,
    IHttp,
    ILogger,
    IModify,
    IPersistence,
    IRead,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { IPostRoomUserJoined, IRoomUserJoinedContext } from '@rocket.chat/apps-engine/definition/rooms';
import { GetInfo } from './slashcommands/GetInfo';

const getApiUrl = username => `https://welcome-gen-59cce07ae427.herokuapp.com/welcome/${username}`;

export class WelcomeBotApp extends App implements IPostRoomUserJoined {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }
    async executePostRoomUserJoined(context: IRoomUserJoinedContext, read: IRead, http: IHttp, persistence: IPersistence, modify?: IModify | undefined): Promise<void> {
        const username = context.joiningUser.username;
        const response = await http.get(getApiUrl(username));
        this.getLogger().log(response);
        if (response.content && modify) {
            const data = JSON.parse(response.content);
            const message = await modify
                .getCreator()
                .startMessage()
                .setRoom(context.room)
                .setText(data.message);

            await modify.getCreator().finish(message);
        }
    }

    protected async extendConfiguration(configuration: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {
        await configuration.slashCommands.provideSlashCommand(new GetInfo());
    }
}
