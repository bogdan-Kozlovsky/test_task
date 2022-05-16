import {instance} from "api/config";
import {AddUserType} from "api/form/types";
import {PositionType} from "store/reducer/form/types";

export const formApi = {
    getPosition() {
        return instance.get<PositionType>(`positions`,)
    },
    addUser(data: AddUserType) {
        return instance.post(`/users`, data)
    }
}

