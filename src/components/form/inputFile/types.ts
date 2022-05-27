import { ChangeEvent } from 'react';

export type InputFilePropsType = {
  onPhotoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setFormError: (value: string) => any;
  hasError: (value: string) => string;
};
