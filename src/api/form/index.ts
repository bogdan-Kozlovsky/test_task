import {instance} from "api/config";
import {UserType} from "store/reducer/user/types";

export const formApi = {
    getPosition() {
        return instance.get<UserType>(`positions`, )
    }
}

