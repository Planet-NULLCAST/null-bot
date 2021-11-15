import { config } from "dotenv";

config();

const env = {
  discordBotId: process.env.DISCORD_BOT_ID,
};

export default env;
