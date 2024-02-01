# Setting Up the Rocket.Chat App starter code

This guide provides a brief overview of how to set up the starter code for the Rocket.Chat App. We will use this project during our App Development workshop.

## Prerequisites

Before you begin, ensure you have the following:

- Rocket.Chat server set up and running. We will provide a server during the workshop.
- Linux OS or WSL with Node.js installed.
- The Rocket.Chat Apps CLI installed. You can install it using npm with the command `npm install -g @rocket.chat/apps-cli`.

## Steps to Set Up this Rocket.Chat App

1. **Clone this repo**:
    ```
    git clone https://github.com/abhinavkrin/app-workshop-welcome-bot.git
    ```
2. **Install the dependencies**:
    ```
    npm install
    ```
3. **Edit `app.json`**:
   Every Rocket.Chat app has a unique ID. To set this, you will need to replace the placeholder in the `id` field of your `app.json` file with a unique UUID.
   
   - Obtain a UUID from [UUID Generator](https://www.uuidgenerator.net/version4) and replace the `id` field in your `app.json` with this UUID.
   
   Example `app.json` snippet:
   ```json
   {
     "id": "YOUR-UNIQUE-APP-ID",
     "name": "Your App Name",
     "description": "What your app does",
     ...
   }
   ```
   
   Replace `YOUR-UNIQUE-APP-ID` with the UUID you obtained.

4. **Edit `GetInfo.ts`**:
    Since, each slash command is unique, we cannot havemore than one slash command with same command string. Edit `slashCommands/GetInfo.ts`
    ```
    export class GetInfo implements ISlashCommand {
        public command = "getinfo-YOURNAME";
        ...

        async executor(...): Promise<void> {

        }
    }
    ```
    Replace `YOURNAME` with your name. As a result, each one of you will will have a unique slash command.

5. **Develop Your App**:
   With the project starter code configured, follow us along in the workshop to develop the app.

6. **Deploy Your App**:
   After developing your app, you can deploy it to your Rocket.Chat server for testing and use. Use the Rocket.Chat Apps CLI to package and deploy your app:
   ```
   rc-apps deploy --url <url-of-rc-server> --username <your-email/username> --password <your-password>
   ```

See you in the workshop! Don't forget to fill feedback form which will be provided at the end of the workshop.
