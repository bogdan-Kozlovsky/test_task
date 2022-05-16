import React from "react";
// type FormikErrorType = {
//     email?: string;
//     password?: string;
// };
// export const checkValidation = (
//     formik: FormikProps<FormikErrorType>,
//     values: FormikErrorType,
//     setDisable: (disable: boolean) => void,
// ) => {
//     const errors: FormikErrorType = {};
//     if (!values.email) {
//         errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }
//     if (!values.password) {
//         errors.password = 'Required';
//     } else {
//         const minValue = 3;
//         if (values.password.length < minValue) {
//             errors.password = 'Must be more than 3 characters.';
//         }
//     }
//
//     if (formik.errors.email || formik.errors.password) {
//         const number = 0;
//         if (Object.keys(errors).length === number) {
//             setDisable(false);
//         } else {
//             setDisable(true);
//         }
//     }
//     return errors;
// };