import { IRead, IModify, IHttp, IPersistence } from "@rocket.chat/apps-engine/definition/accessors";
import { ISlashCommand, SlashCommandContext } from "@rocket.chat/apps-engine/definition/slashcommands";

export class GetInfo implements ISlashCommand {
    public command = "getinfo-abhinav";
    public i18nParamsExample = "getinfo";
    public i18nDescription = "getinfo";
    public providesPreview = false;

    async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {
        const message = modify.getCreator()
            .startMessage()
            .setRoom(context.getRoom())
            .setText("Google Summer of Code is a global program focused on introducing students to open source software development. Students work on a 3 month programming project with an open source organization during their break from university. To know more about GSoC, visit https://summerofcode.withgoogle.com/");

        await modify
            .getNotifier()
            .notifyUser(context.getSender(), message.getMessage());
    }
}
