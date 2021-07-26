import axios from 'axios';

const api = axios.create({
    baseURL:'https://vtex-apple-store.netlify.app/server.json'
})

export default api;
