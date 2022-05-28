import { instance } from 'api/config';
import { PathAdditionalEndpoint } from 'enums/ADDITIONAL_ENDPOINTS';
import { UserType } from 'store/reducer/user/types';

export const userApi = {
  getUser(page: number, count: number) {
    return instance.get<UserType>(`${PathAdditionalEndpoint.USERS}`, {
      params: { page, count },
    });
  },
};
