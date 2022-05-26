import { instance } from 'api/config';
import { GetTokenType } from 'api/form/types';
import { PathAdditionalEndpoint } from 'enums/ADDITIONAL_ENDPOINTS';

export const tokenApi = {
  getToken() {
    return instance.get<GetTokenType>(`${PathAdditionalEndpoint.TOKEN}`);
  },
};
