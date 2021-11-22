import { Client, Intents } from 'discord.js'
import env from '../../env.js'

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS, // for the guild member to add event in discord js to happen
    ],
})
client.login(env.discordBotId)

export default client
