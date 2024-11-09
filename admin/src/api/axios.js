import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://harmonyhub-backend.onrender.com',
});

export default instance;