# Setting Up the Rocket.Chat App starter code

This guide provides a brief overview of how to set up the starter code for the Rocket.Chat App. We will use this project during our App Development workshop.

## Prerequisites

Before you begin, ensure you have the following:

- Rocket.Chat server set up and running. We will provide a server during the workshop.
- Linux OS or WSL with Node.js installed.
- The Rocket.Chat Apps CLI installed. You can install it using npm with the command `npm install -g @rocket.chat/apps-cli`.
- The starter code is already set up. Follow the below steps to set up the starter code.

## Steps to Set Up this Rocket.Chat App
1. **Clone this repo**:
    ```
    git clone https://github.com/abhinavkrin/app-workshop-welcome-bot.git
    ```
Now you can follow either `automatic` or `manual` setup process.

### Automatic 
We have added an automated script to set up this project. 
```
npm run setup
```
**However, I highly recommend to read the manual steps to understand what is happening in the script.**

### Manual

1. **Install the dependencies**:
    ```
    npm install
    ```
2. **Edit `app.json`**:
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

3. **Edit `GetInfo.ts`**:
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

4. **Check Setup**
To run a check if everything has been set up correctly, run:
```
npm run check-setup
```

### Develop Your App: (During Workshop)
   With the project starter code configured, follow us along in the workshop to develop the app.

### Deploy Your App: (During Workshop)
   After developing your app, you can deploy it to your Rocket.Chat server for testing and use. Use the Rocket.Chat Apps CLI to package and deploy your app:
   ```
   rc-apps deploy --url <url-of-rc-server> --username <username> --password <your-password>
   ```
   Username and password will be provided during workshop

## FAQ
### **1. Where can I find the final code?** <br>
The final code could be found in the `final` branch

### **2. When will the Username and Password for the test server be shared?**
The credentials will be shared during workshop

### **3. What if I encounter errors during setup?**
Please share your issue in the [Events Channel](https://open.rocket.chat/channel/events-and-meet-ups).

### **4. Is setting up the project mandatory?**
Yes. For best experience during the workshop, It is highly recommended that you have set up the starter code.

See you in the workshop! Don't forget to fill feedback form which will be provided at the end of the workshop.
