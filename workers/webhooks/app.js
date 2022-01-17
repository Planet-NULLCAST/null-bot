import axios from 'axios';
import env from '../../env.js'
import axiosInstance from './services/axiosInstance.js';

const webhooksSend = async (message, type) => {

    try {

        if (env.webhooks.webhooksEndpoints) {

            const botMessage = newData[type]?.run();
            const configs = await axiosInstance.get('', botMessage);
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
                    customMsg: message
                }
            }
        }
    }

};

export default webhooksSend;