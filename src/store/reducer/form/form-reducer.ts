import {Dispatch} from "redux";

import {formApi} from "api/form";
import {setInitialized} from "store/reducer/app/app-reducer";
import {initialStateType, PositionType} from "store/reducer/form/types";

const initialState: initialStateType = {
    success: false,
    positions:[]
}

export const formReducer = (state: initialStateType = initialState, action: GlobalActionType): initialStateType => {
    switch (action.type) {
        case "POSITION/SET_POSITION": {
            return {...state, ...action.payload.position}
        }
        default:
            return state;
    }
}

const setPosition = (position: PositionType) => ({
    type: 'POSITION/SET_POSITION', payload: {position}
} as const)
;

export type GlobalActionType =
    | ReturnType<typeof setPosition>

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
