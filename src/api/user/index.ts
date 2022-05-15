import {instance} from "api/config";
import {UserType} from "store/reducer/user/types";

export const userApi = {
    getUser() {
        return instance.get<UserType>(`users`)
    }
}

// https://frontend-test-assignment-api.abz.agency/api/v1/
// https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5