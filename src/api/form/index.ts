import { instance } from 'api/config';
import { AnswerUserType } from 'api/form/types';
import { PathAdditionalEndpoint } from 'enums/ADDITIONAL_ENDPOINTS';
import { PathNavigation } from 'enums/NAVIGATION';
import { PositionType } from 'store/reducer/form/types';
import { UserType } from 'types/UserType';

export const formApi = {
  getPosition() {
    return instance.get<PositionType>(`${PathAdditionalEndpoint.POSITION}`);
  },
  addUser(data: UserType, token: string) {
    return instance.post<AnswerUserType>(`${PathNavigation.USER}`, data, {
      headers: {
        Token: token,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
