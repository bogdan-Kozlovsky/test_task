import { instance } from 'api/config';

export const tokenApi = {
  getToken() {
    return instance.get<{ success: boolean; token: string }>(`token`);
  },
};