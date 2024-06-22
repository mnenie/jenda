import type { AxiosResponse } from 'axios';
import { api } from '@/shared/api';

export const login = async (email: string, password: string): Promise<AxiosResponse> => {
  return await api.post('/auth/login', { email, password });
};

export const registration = async (email: string, password: string): Promise<AxiosResponse> => {
  return await api.post('/auth/registration', { email, password });
};
