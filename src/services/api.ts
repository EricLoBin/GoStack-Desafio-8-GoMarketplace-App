import axios from 'axios';

const api = axios.create({
  baseURL: 'http://2.tcp.ngrok.io:15704',
});

export default api;
