// This is the config that need not be edited by other users
import { prod, dev } from './config.js';
import { config } from "dotenv";

config();

const developmentType  = process.argv[2];
let isProdType = true;

if (developmentType === 'dev') isProdType = false;

// to save the env that we given to params by default it will be prod you can pass param as dev to set dev type env
const typeEnv = {
    welcomeChannelID : isProdType ? prod.welcomeChannel : dev.welcomeChannel,
    s3StaticUrl : isProdType ? prod.s3StaticURL : dev.s3StaticURL,
}
    
const env = {
    discordBotId : process.env.DISCORD_BOT_ID ? process.env.DISCORD_BOT_ID : '',
    welcomeChannelID: process.env.DISCORD_BOT_ID ? process.env.WELCOME_CHANNEL_ID : typeEnv.welcomeChannelID,
    s3StaticUrl:  process.env.DISCORD_BOT_ID ? process.env.S3_STATIC_URL : typeEnv.s3StaticUrl,
};

export default env;
