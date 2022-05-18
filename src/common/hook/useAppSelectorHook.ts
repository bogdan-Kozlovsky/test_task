import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppRootType } from 'store/store';

export const useAppSelector: TypedUseSelectorHook<AppRootType> = useSelector;
