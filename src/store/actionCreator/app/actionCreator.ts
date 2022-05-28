export const setInitialized = (value: boolean) =>
  ({ type: 'APP/SET_INITIALIZED', value } as const);

export const setErrorValue = (value: string | null) =>
  ({ type: 'APP/SET_ERROR_VALUE', value } as const);
