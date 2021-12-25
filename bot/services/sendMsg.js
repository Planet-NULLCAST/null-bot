import client from '../config/discord-config.js'

const sendMessgae = async ({message, channelID}) => {
    try {
        await client.channels.cache.get(channelID).send(message);
    } catch (error) {
        console.log('error', error)
    }
}

export default sendMessgae;
