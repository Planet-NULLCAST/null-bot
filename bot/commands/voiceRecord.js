import { joinVoiceChannel, entersState, VoiceConnectionStatus} from '@discordjs/voice'
import {createListeningStream} from '../services/createListingStream.js';
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

    try {

        await entersState(connection, VoiceConnectionStatus.Ready, 20e3);
        const receiver = connection.receiver;


        // createListeningStream(receiver, '559899420582477847', client.users.cache.get('559899420582477847'));

        receiver.speaking.on('start', (userId) => {
			
				createListeningStream(receiver, userId, client.users.cache.get(userId));
			
		});


        // await entersState(connection, VoiceConnectionStatus.Ready, 30_000);


        // const receiver = connection.receiver.subscribe('559899420582477847', {
        //     mode: "pcm",
        //     end: "silence",
            
        //   });

        // const stream = fs.createWriteStream('/workspaces/null-bot/bot/commands/recording.pcm');

        // const writter = receiver.pipe(stream)


        // receiver.on('data' , (chunck)=> {
        //     console.log(chunck);
        //     stream.write(chunck)
        // });



    } catch (error) {

        connection.destroy();
        throw error;

    }
}

export default voiceRecord;