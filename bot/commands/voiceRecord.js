import { joinVoiceChannel, entersState, VoiceConnectionStatus} from '@discordjs/voice'
import ListingStream from '../services/createListingStream.js';
import client from '../config/discord-config.js';


const voiceRecord = async (interaction) => {

    interaction.reply({
        content: 'audio recording started',
        ephemeral: true
    })

    const { options } = interaction;

    const voiceChannelId = options._hoistedOptions[0].channel.id;

    const connection = joinVoiceChannel({
        channelId: voiceChannelId,
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false
    });
    let userTalk = {};

    try {

        

        await entersState(connection, VoiceConnectionStatus.Ready, 20e3);
        const receiver = connection.receiver;


        // createListeningStream(receiver, '559899420582477847', client.users.cache.get('559899420582477847'));


        receiver.speaking.on('start', (userId) => {

            if (!userTalk[userId]) {

                userTalk[userId] = {classObj: null};

                userTalk[userId]['classObj'] = new ListingStream();

                userTalk[userId]['classObj'].createListeningStream(receiver, userId, client.users.cache.get(userId))
               
            }
			
		});

    } catch (error) {

        connection.destroy();
        throw error;

    }
}

export default voiceRecord;