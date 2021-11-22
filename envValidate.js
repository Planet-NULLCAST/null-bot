import { config } from "dotenv";
config();

// ? please enter the minium env to be validated before starting the servers.

const envValidity = () => {

    if (!process.env.DISCORD_BOT_ID) {
        throw new Error('Please provide the DISCORD_BOT_ID on your .env'); 
    }

}

export default envValidity;