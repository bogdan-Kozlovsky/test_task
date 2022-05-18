import {initialStateType} from "store/reducer/app/types";

const initialState: initialStateType = {
    initialized: false,
    error: null,
}

export const appReducer = (state: initialStateType = initialState, action: GlobalActionType): initialStateType => {
    switch (action.type) {
        case "APP/SET_INITIALIZED":
            return {...state, initialized: action.value}
        case "APP/SET_ERROR_VALUE":
            return {...state, error: action.value}
        default:
            return state
    }
}

export const setInitialized = (value: boolean) => ({type: 'APP/SET_INITIALIZED', value} as const)
export const setErrorValue = (value: string | null) => ({type: 'APP/SET_ERROR_VALUE', value} as const)

export type GlobalActionType =
    | ReturnType<typeof setInitialized>
    | ReturnType<typeof setErrorValue>