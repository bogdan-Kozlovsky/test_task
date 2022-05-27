import React from 'react';

import { InputFilePropsType } from 'components/form/inputFile/types';
import s from 'components/form/style.module.scss';

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
