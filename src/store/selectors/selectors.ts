import {AppRootType} from "store/store";
// user
export const selectUsers = (state: AppRootType) => state.user.users
export const selectPage = (state: AppRootType) => state.user.params.page
export const selectCount = (state: AppRootType) => state.user.params.count
export const selectTotalPages = (state: AppRootType) => state.user.total_pages

// app
export const selectInitialized = (state: AppRootType) => state.app.initialized

// form
export const selectPosition = (state:AppRootType) => state.form.positions

// error
export const selectErrorValue = (state:AppRootType) => state.app.error