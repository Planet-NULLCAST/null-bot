import env from '../../../env.js'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: env.webhooks.webhooksEndpoints,
    timeout: 3000,
    headers: {'Bot-Token': env.webhooks.webhooksToken}
});

export default axiosInstance;