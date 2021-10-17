import axios from 'axios';

const axiosService = axios.create({
    baseURL: 'https://api.unsplash.com/',
    timeout: 10000,

});

// singleton instance
export default axiosService;

