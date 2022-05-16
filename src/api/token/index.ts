import {instance} from "api/config";

export const tokenApi = {
    getToken() {
        return instance.get<string>(`token`, )
    }
}