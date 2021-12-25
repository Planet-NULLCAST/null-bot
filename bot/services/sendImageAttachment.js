import client from '../config/discord-config.js'
import Discord from 'discord.js'

const sendImageAttachement = async ({data, fileName, channelID}) => {
    try {

        const attachment = new Discord.MessageAttachment(data.toBuffer(), 'pngs.png');
        await client.channels.cache.get(channelID).send({files: [attachment]});

    } catch (error) {

        console.log('error', error);
        
    }
  
}

export default sendImageAttachement;