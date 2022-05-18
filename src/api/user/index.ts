import {instance} from "api/config";
import {UserType} from "store/reducer/user/types";

export const userApi = {
    getUser(page: number, count: number) {
        return instance.get<UserType>(`users`, {params: {page, count}})
    }
}