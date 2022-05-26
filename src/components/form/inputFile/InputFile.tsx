import React, { ChangeEvent } from 'react';

import s from 'components/form/style.module.scss';

type InputFilePropsType = {
  onPhotoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setFormError: (value: string) => any;
  hasError: (value: string) => string;
};

export const InputFile = (props: InputFilePropsType) => {
  const { setFormError, onPhotoChange, hasError } = props;
  return (
    <label className={`${s.label} ${hasError('photo') && s.form__input_error} `}>
      <input
        required
        className="choose"
        name="photo"
        type="file"
        onChange={onPhotoChange}
      />
      <span className={s.button}>Upload</span>
      <span className={s.labelTwo}>Upload your photo</span>
      {setFormError('photo')}
    </label>
  );
};
