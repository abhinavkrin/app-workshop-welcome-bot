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
import { SettingType } from '@rocket.chat/apps-engine/definition/settings';

const getApiUrl = username => `https://welcome-gen-59cce07ae427.herokuapp.com/welcome/${username}`;

export class WelcomeBotApp extends App implements IPostRoomUserJoined {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }
    async executePostRoomUserJoined(context: IRoomUserJoinedContext, read: IRead, http: IHttp, persistence: IPersistence, modify?: IModify | undefined): Promise<void> {
        // const username = context.joiningUser.username;
        // const response = await http.get(getApiUrl(username));
        // this.getLogger().info(response);
        // if (response.content && modify) {
        //     const data = JSON.parse(response.content);
        //     const message = await modify
        //         .getCreator()
        //         .startMessage()
        //         .setRoom(context.room)
        //         .setText(data.message);

        //     await modify.getCreator().finish(message);
        // }
    }

    protected async extendConfiguration(configuration: IConfigurationExtend, environmentRead: IEnvironmentRead): Promise<void> {
        // await configuration.slashCommands.provideSlashCommand(new GetInfo());
        // await configuration.settings.provideSetting({
        //     id: 'welcome_rooms',
        //     type: SettingType.STRING,
        //     packageValue: '',
        //     required: false,
        //     public: false,
        //     i18nLabel: 'Allowed Rooms (Comma Separated)',
        //     i18nDescription: 'Only welcome users in these rooms.',
        // });
    }
}
