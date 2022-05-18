import {instance} from "api/config";
import {AddUserType, AnswerUser} from "api/form/types";
import {PositionType} from "store/reducer/form/types";

export const formApi = {
    getPosition() {
        return instance.get<PositionType>(`positions`,)
    },
    addUser(data: AddUserType, token: string) {
        return instance.post<AnswerUser>(`/users`, data, {headers: {Token: token}})
    }
}

