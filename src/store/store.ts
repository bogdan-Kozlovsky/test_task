import {useDispatch} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkDispatch} from "redux-thunk";

import {appReducer} from "store/reducer/app/app-reducer";
import {GlobalActionType, userReducer} from "store/reducer/user/user-reducer";

const reducers = combineReducers({
    user: userReducer,
    app: appReducer,
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export type AppRootType = ReturnType<typeof reducers>
export type AppActionType = GlobalActionType
export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<AppRootType, any, AppActionType>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
