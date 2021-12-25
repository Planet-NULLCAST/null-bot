import sendPrivateMessage from '../services/privateMessage.js';

import regulations from '../constants/regulations.js';

const regulationsDm  = async (message) => {
    try {
        await sendPrivateMessage(regulations, {message: message});
    } catch (error) {
        throw error;
    }
}

export default regulationsDm;

