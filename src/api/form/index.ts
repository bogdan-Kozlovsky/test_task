import { instance } from 'api/config';
import { AnswerUserType } from 'api/form/types';
import { PATH_ADDITIONAL_ENDPOINTS } from 'common/enums/additionalEndpoints';
import { PATH_NAVIGATION } from 'common/enums/navigation';
import { PositionType } from 'store/reducer/form/types';
import { UserType } from 'types/UserType';

export const formApi = {
  getPosition() {
    return instance.get<PositionType>(`${PATH_ADDITIONAL_ENDPOINTS.POSITIONS}`);
  },
  addUser(data: UserType, token: string) {
    return instance.post<AnswerUserType>(`${PATH_NAVIGATION.USERS}`, data, {
      headers: {
        Token: token,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
