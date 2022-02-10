import { joinVoiceChannel, entersState, VoiceConnectionStatus} from '@discordjs/voice'
import ListingStream from '../services/createListingStream.js';
import client from '../config/discord-config.js';


const voiceRecord = async (interaction) => {

    interaction.reply({
        content: 'audio recording starting',
        ephemeral: true
    })

    const { options } = interaction;

    const voiceChannelId = options._hoistedOptions[0].channel.id;
    const userGetId = options._hoistedOptions[1]?.user?.id;

    const connection = joinVoiceChannel({
        channelId: voiceChannelId,
        guildId: interaction.guild.id,
        adapterCreator: interaction.guild.voiceAdapterCreator,
        selfDeaf: false,
        selfMute: false,
    });
    let userTalk = {};

    try {

        await entersState(connection, VoiceConnectionStatus.Ready, 20e3);
        const receiver = connection.receiver;

        if (userGetId) {

            interaction.followUp({
                content: `Audio recording started and listening to ${options._hoistedOptions[1].user.name}`,
                ephemeral: true
            });

            const userListernStream = new ListingStream();
            userListernStream.createListeningStream(receiver, userGetId, client.users.cache.get(userGetId))
            
        }else{

            interaction.followUp({
                content: `Audio recording started and listening all users in ${options._hoistedOptions[0].channel.name}`,
                ephemeral: true
            });

            receiver.speaking.on('start', (userId) => {

                if (!userTalk[userId]) {
    
                    userTalk[userId] = {classObj: null};
    
                    userTalk[userId]['classObj'] = new ListingStream();
    
                    userTalk[userId]['classObj'].createListeningStream(receiver, userId, client.users.cache.get(userId))
                   
                }
                
            });
        }

    } catch (error) {

        interaction.followUp({
            content: `Audio recording in ${options._hoistedOptions[0].channel.name}. Error occurrd.`,
            ephemeral: true
        });

        connection.destroy();
        throw error;

    }
}

export default voiceRecord;