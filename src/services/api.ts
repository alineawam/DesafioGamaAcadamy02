import axios from 'axios';

const url = `${document.baseURI}/server.json`;
const api = axios.create({
    baseURL: url
})

export default api;
