import React, { ChangeEvent, useEffect, useState } from 'react';

import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import preloader from 'assets/icons/preloader.svg';
import { Button } from 'common/button/Button';
import { ModalError } from 'common/modalError/ModalError';
import { InputFile } from 'components/form/inputFile/InputFile';
import { Positions } from 'components/form/position/Positions';
import s from 'components/form/style.module.scss';
import { PathNavigation } from 'enums/NAVIGATION';
import { useAppSelector } from 'hooks/useAppSelectorHook';
import { addUserTC, getPositionTC, getTokenTC } from 'store/reducer/form/form-reducer';
import {
  selectErrorMessage,
  selectIsInitialized,
  selectIsRedirect,
  selectPositions,
} from 'store/selectors/selectors';
import { useTypedDispatch } from 'store/store';
import { checkValidation } from 'utils/checkValidation/checkValidation';

const FIRST_FILE_INDEX = 0;

export const Form = () => {
  const dispatch = useTypedDispatch();

  const initialized = useAppSelector(selectIsInitialized);
  const errorMessage = useAppSelector(selectErrorMessage);
  const positions = useAppSelector(selectPositions);
  const isRedirectValue = useAppSelector(selectIsRedirect);

  const navigate = useNavigate();

  const [isDisable, setIsDisable] = useState<boolean>(true);

  const formik: any = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position_id: 1,
      photo: '',
    },

    validate: values => checkValidation(formik, values, setIsDisable),

    onSubmit: (data, { resetForm }) => {
      dispatch(addUserTC({ ...data, position_id: Number(data.position_id) }));
      setIsDisable(false);
      resetForm();
    },
  });

  const hasError = (value: string): string =>
    formik.touched[value] && formik.errors[value];

  const setFormError = (value: string) => {
    if (formik.touched[value] && formik.errors[value]) {
      return <div className={s.form__error}>{formik.errors[value]}</div>;
    }
    return null;
  };

  const onPositionIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
  };

  const onPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files.length) {
      formik.setFieldValue('photo', e.currentTarget.files[FIRST_FILE_INDEX]);
    }
  };

  useEffect(() => {
    dispatch(getPositionTC());
    dispatch(getTokenTC());
  }, []);

  if (isRedirectValue) {
    navigate(`${PathNavigation.USER}`);
  }

  return (
    <div className={`container ${s.form__box}`}>
      {errorMessage && <ModalError />}

      <h2 className="title">Working with POST request</h2>
      <form className={s.form__wrapper} onSubmit={formik.handleSubmit}>
        <div>
          <label className={s.form__labelStyle_error}>
            <input
              className={`${s.form__input} ${hasError('name') && s.form__input_error} `}
              placeholder="Your name"
              {...formik.getFieldProps('name')}
            />
            {setFormError('name')}
          </label>

          <label className={s.form__labelStyle_error}>
            <input
              className={`${s.form__input} ${hasError('email') && s.form__input_error} `}
              placeholder="Email"
              {...formik.getFieldProps('email')}
            />
            {setFormError('email')}
          </label>

          <label className={`${s.form__label} ${s.form__labelStyle_error}`}>
            <input
              className={`${s.form__input} ${hasError('phone') && s.form__input_error} `}
              type="text"
              placeholder="Phone"
              {...formik.getFieldProps('phone')}
            />
            <span className={s.form__label_span}>+38 (XXX) XXX - XX - XX</span>
            {setFormError('phone')}
          </label>
        </div>

        <div className={s.form__select_wrap}>
          {initialized && <img className="preloader" src={preloader} alt="preloader" />}
          <p className={s.form__select_text}>Select your position</p>

          <Positions
            onPositionIdChange={onPositionIdChange}
            setFormError={setFormError}
            positions={positions}
            position_id={formik.position_id}
          />
        </div>

        <InputFile
          setFormError={setFormError}
          hasError={hasError}
          onPhotoChange={onPhotoChange}
        />

        <Button className={s.form__btn} disabled={isDisable} type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};
