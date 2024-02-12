import { IRead, IModify, IHttp, IPersistence } from "@rocket.chat/apps-engine/definition/accessors";
import { ISlashCommand, SlashCommandContext } from "@rocket.chat/apps-engine/definition/slashcommands";
import { IBlock } from "@rocket.chat/apps-engine/definition/uikit";

export class GetInfo implements ISlashCommand {
    public command = "getinfo-YOURNAME";
    public i18nParamsExample = "getinfo";
    public i18nDescription = "getinfo";
    public providesPreview = false;

    async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {

    }
}

const plainText = `Google Summer of Code is a global program focused on introducing students to open source software development. Students work on a 3 month programming project with an open source organization during their break from university. To know more about GSoC, visit https://summerofcode.withgoogle.com/`;

const blocks = [
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*🚀 Google Summer of Code (GSoC)*\nAn international program introducing students to open source software development."
		}
	},
	{
		"type": "actions",
		"elements": [
			{
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Learn More"
				},
				"url": "https://summerofcode.withgoogle.com/"
			}
		]
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*✅ Eligibility and Application*\nOpen to university students 18 and above. Apply by submitting a project proposal to an open source organization."
		}
	},
	{
		"type": "actions",
		"elements": [
			{
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Application Guide"
				},
				"url": "https://summerofcode.withgoogle.com/how-it-works/"
			}
		]
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*🌟 Benefits*\nGain experience, network with the tech community, and improve coding skills. A stipend is also provided."
		}
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*⏰ Timeline*\nIncludes application period, coding period, and evaluations. Check current year's dates for specifics."
		}
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*💡 Application Tips*\nExplore organizations, contribute to codebases, engage with communities, and create a strong proposal."
		}
	},
	{
		"type": "actions",
		"elements": [
			{
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Tips for Success"
				},
				"url": "https://opensource.googleblog.com/"
			}
		]
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*🌈 Past Projects*\nMany projects have significantly contributed to open source. Check out past success stories for inspiration."
		}
	},
	{
		"type": "actions",
		"elements": [
			{
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Success Stories"
				},
				"url": "https://summerofcode.withgoogle.com/archive/"
			}
		]
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*🔗 Resources*\nVisit the official GSoC website, FAQs, and student guide for more information."
		}
	},
	{
		"type": "actions",
		"elements": [
			{
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "GSoC FAQ"
				},
				"url": "https://developers.google.com/open-source/gsoc/faq"
			}
		]
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*🤝 Community Support*\nJoin our discussions on Rocket.Chat for application and project support."
		}
	}
]
