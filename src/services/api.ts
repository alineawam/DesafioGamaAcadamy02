import axios from 'axios';

const api = axios.create({
    baseURL:'https://flamboyant-babbage-c32faf.netlify.app/produtos'
})

export default api;
