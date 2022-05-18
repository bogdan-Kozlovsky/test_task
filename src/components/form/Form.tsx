import React, {ChangeEvent, useEffect, useState} from 'react';

import {useFormik} from "formik";

import preloader from "assets/icons/preloader.svg";
import {useAppSelector} from "common/hook/useAppSelectorHook";
import {ModalError} from "common/modalError/ModalError";
import s from 'components/form/style.module.scss'
import {addUser, getPositionTC, getToken} from "store/reducer/form/form-reducer";
import {selectErrorValue, selectInitialized, selectPosition} from "store/selectors/selectors";
import {useTypedDispatch} from "store/store";
import {checkValidation} from "utils/checkValidation";

export const Form = () => {
    const dispatch = useTypedDispatch();

    const initialized = useAppSelector(selectInitialized)
    const error = useAppSelector(selectErrorValue)
    const positionDate = useAppSelector(selectPosition)

    // local state
    const [disable, setDisable] = useState<boolean>(true);

    // formik
    // @ts-ignore
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            position_id: 1,
            photo: '',
        },
        validate: values => checkValidation(formik, values, setDisable),
        onSubmit: data => {
            dispatch(addUser({...data, position_id: +data.position_id}));
            setDisable(false);
            formik.resetForm();
        },
    });

    const isErrorChecking = (value: string) => formik.touched[value] && formik.errors[value]

    const validationCheckHandler = (value: string) => formik.touched[value] && formik.errors[value]
        ? (<div className={s.form__error}>{formik.errors.email}</div>)
        : null

    // onChange input radio
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        formik.handleChange(e)
    }

    useEffect(() => {
        dispatch(getPositionTC())
        dispatch(getToken())
    }, [])

    return (
        <div className={`container ${s.form__box}`}>
            {error && <ModalError/>}
            <h2 className='title'>Working with POST request</h2>
            <form className={s.form__wrapper} onSubmit={formik.handleSubmit}>
                <div>

                    <label className={s.form__labelStyle_error}>
                        <input
                            className={`${s.form__input} ${isErrorChecking('name') && s.form__input_error} `}
                            placeholder="Your name"
                            {...formik.getFieldProps('name')}
                        />
                        {/* // validate name */}
                        {validationCheckHandler('name')}
                    </label>

                    <label className={s.form__labelStyle_error}>
                        <input
                            className={`${s.form__input} ${formik.touched.email && formik.errors.email && s.form__input_error} `}
                            placeholder="Email"
                            {...formik.getFieldProps('email')}
                        />
                        {/* // validate email */}
                        {validationCheckHandler('email')}
                    </label>

                    <label className={`${s.form__label} ${s.form__labelStyle_error}`}>
                        <input
                            className={`${s.form__input} ${formik.touched.photo && formik.errors.photo && s.form__input_error} `}
                            placeholder="Phone"
                            {...formik.getFieldProps('phone')}
                        />
                        {/* // validate phone */}
                        <span className={s.form__label_span}>+38 (XXX) XXX - XX - XX</span>
                        {validationCheckHandler('phone')}
                    </label>
                </div>

                <div className={s.form__select_wrap}>
                    {/* // loader active */}
                    {initialized && <img className='preloader' src={preloader} alt="preloader"/>}

                    <p className={s.form__select_text}>Select your position</p>

                    {positionDate.map(e => (
                        <label key={e.id} className={s.form__select_item}>
                            <input
                                defaultChecked={formik.values.position_id === e.id}
                                onChange={onChangeHandler}
                                required
                                type="radio"
                                className={s.form__radio}
                                value={e.id}
                                name="position_id"
                            />
                            <span className={s.form__check_style}/>
                            {e.name}
                            {validationCheckHandler('position_id')}
                        </label>
                    ))}

                </div>

                <label className={`${s.label} ${formik.touched.photo && formik.errors.photo && s.form__input_error} `}>
                    {/* <input className="choose" type="file" name="avatar" {...formik.getFieldProps('photo')}/> */}
                    <input required className="choose" type="file"   {...formik.getFieldProps('photo')}/>
                    <span className={s.button}>Upload</span>
                    <span className={s.labelTwo}>Upload your photo</span>
                    {validationCheckHandler('photo')}
                </label>
                <button className={s.form__btn} disabled={disable} type='submit'>Sign up</button>
            </form>
        </div>
    );
};

