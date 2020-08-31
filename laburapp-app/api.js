import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.api_url,
});

api.interceptors.response.use(
  response => response,
  error => error
);

export default api;