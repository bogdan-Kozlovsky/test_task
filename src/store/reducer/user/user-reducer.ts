import {Dispatch} from "redux";

import {userApi} from "api/user";
import {initialStateType, UserType} from "store/reducer/user/types";

const initialState: initialStateType = {
    users: [],
    count: 0,
    success: false,
    total_pages: 0,
    total_users: 0,
    page: 0,
    links: {
        next_url: '',
        prev_url: null
    }
}

export const userReducer = (state: initialStateType = initialState, action: GlobalActionType): initialStateType => {
    switch (action.type) {
        case "USER/SET_USERS": {
            return {...state, ...action.payload.user}
        }
        default:
            return state;
    }
}

const setUsers = (user: UserType) => ({
    type: 'USER/SET_USERS', payload: {user}
} as const)

export type GlobalActionType =
    | ReturnType<typeof setUsers>

export const getUsersTC = () => async (dispatch: Dispatch) => {
    try {
        const respons = await userApi.getUser()
        dispatch(setUsers(respons.data))
    } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e)
    }
}
