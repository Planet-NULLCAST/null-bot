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
    welcomeChannelID: process.env.WELCOME_CHANNEL_ID ? process.env.WELCOME_CHANNEL_ID : typeEnv.welcomeChannelID,
    s3StaticUrl:  process.env.S3_STATIC_URL ? process.env.S3_STATIC_URL : typeEnv.s3StaticUrl,
    emailID : {
        userName: process.env.EMAIL_USERNAME,
        password: process.env.EMAIL_PASSWORD,
        devEmailId: process.env.DEV_EMAIL_ID ? process.env.DEV_EMAIL_ID : process.env.EMAIL_USERNAME 
    } 
};

export default env;
