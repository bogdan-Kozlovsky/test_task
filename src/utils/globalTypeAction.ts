import {setCurrentPage, setUsers} from "store/reducer/user/user-reducer";

export type GlobalActionType =
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
