import axios from 'axios';
import { useCookies } from '@vueuse/integrations/useCookies';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE
});

const cookies = useCookies();

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${cookies.get('token')}`;
  return config;
});
