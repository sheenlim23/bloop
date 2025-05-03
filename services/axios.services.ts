import { Config } from '@/constants/config.constant';
import axios from 'axios';
import { headers } from 'next/headers'

const api = axios.create({
  baseURL: Config.api_base_url,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    config.headers['Origin'] = Config.base_url;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
