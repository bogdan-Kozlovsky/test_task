import {Dispatch} from "redux";

import {formApi} from "api/form";
import {tokenApi} from "api/token";
import {setInitialized} from "store/reducer/app/app-reducer";
import {initialStateType, PositionType} from "store/reducer/form/types";
import {AddUserType} from "api/form/types";

const initialState: initialStateType = {
    success: false,
    positions: [],
    token: '',
}

export const formReducer = (state: initialStateType = initialState, action: GlobalActionType): initialStateType => {
    switch (action.type) {
        case "POSITION/SET_POSITION": {
            return {...state, ...action.payload.position}
        }
        case "POSITION/SET_TOKEN": {
            return {...state, token: action.tokenValue}
        }
        default:
            return state;
    }
}

const setPosition = (position: PositionType) => ({
        type: 'POSITION/SET_POSITION', payload: {position}
    } as const)
;

const setToken = (tokenValue: string) => ({
        type: 'POSITION/SET_TOKEN', tokenValue
    } as const)
;

export type GlobalActionType =
    | ReturnType<typeof setPosition>
    | ReturnType<typeof setToken>

export const getPositionTC = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setInitialized(true))
        const respons = await formApi.getPosition()
        dispatch(setPosition(respons.data))
    } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e)
    } finally {
        dispatch(setInitialized(false))
    }
}

export const getToken = () => async (dispatch: Dispatch) => {
    try {
        const respons = await tokenApi.getToken()
        dispatch(setToken(respons.data))
    } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e)
    }
}

export const addUser = (data: AddUserType) => async (dispatch: Dispatch) => {
    try {
        dispatch(setInitialized(true))
        await formApi.addUser(data)
    } catch (e) {
        // eslint-disable-next-line no-alert
        alert(e)
    } finally {
        dispatch(setInitialized(false))
    }
}