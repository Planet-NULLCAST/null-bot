import { getVoiceConnection } from "@discordjs/voice";
import botEvents from "../config/events.js";

const voiceRecordFinish = async (interaction) => {


    interaction.reply({
        content: 'Audio recording finished',
        ephemeral: true
    })


    const connection = await getVoiceConnection(interaction.guildId);

    botEvents.emit('close_recording');


    setTimeout(() => {

        if (connection) {
            connection.disconnect();
            connection.destroy();
        }
        
    }, 500);


}

export default voiceRecordFinish;