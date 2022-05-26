import { instance } from 'api/config';
import { GetTokenType } from 'api/form/types';
import { PATH_ADDITIONAL_ENDPOINTS } from 'common/enums/additionalEndpoints';

export const tokenApi = {
  getToken() {
    return instance.get<GetTokenType>(`${PATH_ADDITIONAL_ENDPOINTS.TOKEN}`);
  },
};
