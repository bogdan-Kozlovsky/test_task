import {instance} from "api/config";
import {UserType} from "store/reducer/user/types";

export const userApi = {
    getUser(page: number, count: number) {
        // return instance.get<UserType>(`users`)
        // return instance.get<UserType>(`users?page=${page}&count=6`)
        return instance.get<UserType>(`users`, {params: {page, count}})
    }
}

// https://frontend-test-assignment-api.abz.agency/api/v1/
// https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5