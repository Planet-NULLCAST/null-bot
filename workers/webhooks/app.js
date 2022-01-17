import env from '../../env.js'
import axiosInstance from './services/axiosInstance.js';

const webhooksSend = async (message, type) => {

    try {

        if (env.webhooks.webhooksEndpoints) {

            const botMessage = newData[type]?.run(message);
            const configs = await axiosInstance.post('', botMessage);
            return configs

        }

    } catch (error) {

        console.log('error', error);

    }

}


const newData = {
    'MAINTANCE_BREAK': {
        run: (message) => {
            return {
                messageType: 'maintance_break',
                data: {
                    maintaince: true,
                    message: 'The Bot is going for a maintaince break. please disable all the bot functionality for thr time beign.',
                    data: message
                }
            }
        }
    },
    'MAINTANCE_DONE': {
        run: (message) => {
            return {
                messageType: 'maintance_done',
                data: {
                    maintaince: false,
                    message: 'The Bot maintaince work is completed. Bot functionality is resumed.',
                    data: message
                }
            }
        }
    }

};

export default webhooksSend;