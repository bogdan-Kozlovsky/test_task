import { FormikProps } from 'formik';

import { FormikErrorType } from 'utils/checkValidation/types';

export const checkValidation = (
  formik: FormikProps<FormikErrorType>,
  values: FormikErrorType,
  setDisable: (disable: boolean) => void,
) => {
  const errors: FormikErrorType = {};

  if (!values.email) {
    errors.email = 'Required';
  }
  if (
    !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
      <string>values.email,
    )
  ) {
    errors.email = 'The email must be a valid email address';
  }

  if (!values.name) {
    errors.name = 'Required';
  } else {
    const minNameLength = 2;
    const maxNameLength = 60;
    if (values.name.length < minNameLength) {
      errors.name = 'The name must be at least 2 characters.';
    }
    if (values.name.length > maxNameLength) {
      errors.name = 'The maximum string length must be no more than 60 characters';
    }
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else {
    const minPhoneLength = 13;
    if (values.phone.length < minPhoneLength) {
      errors.phone = 'The name must be at least 12 characters.';
    } else if (!/^\+[0-9]/i.test(values.phone)) {
      errors.phone = 'good';
    }
  }

  if (!values.photo) {
    errors.photo = 'Required';
  }

  if (!values.position_id) {
    errors.position_id = 'Required';
  }
  const isError =
    formik.errors.email ||
    formik.errors.name ||
    formik.errors.photo ||
    formik.errors.phone;

  if (isError) {
    const emptyErrorsLength = 0;
    const isDisabled = Object.keys(errors).length === emptyErrorsLength;
    if (isDisabled) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }
  return errors;
};
