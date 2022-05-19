import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AppRootType } from 'store/store';

export type ThunkType = ThunkAction<void, AppRootType, unknown, AnyAction>;