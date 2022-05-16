import {initialStateType} from "store/reducer/app/types";

const initialState: initialStateType = {
    initialized: false
}

export const appReducer = (state: initialStateType = initialState, action: GlobalActionType): initialStateType => {
    switch (action.type) {
        case "APP/SET_INITIALIZED":
            return {...state, initialized: action.value}
        default:
            return state
    }
}

export const setInitialized = (value: boolean) => ({type: 'APP/SET_INITIALIZED', value} as const)

export type GlobalActionType =
    | ReturnType<typeof setInitialized>