import React, {useEffect} from 'react';

import {useFormik} from "formik";

import preloader from "assets/icons/preloader.svg";
import {useAppSelector} from "common/hook/useAppSelectorHook";
import {SuperInput} from "common/superInput/SuperInput";
import {SuperRadio} from "common/superRadio/SuperRadio";
import s from 'components/form/style.module.scss'
import {addUser, getPositionTC, getToken} from "store/reducer/form/form-reducer";
import {selectInitialized, selectPosition} from "store/selectors/selectors";
import {useTypedDispatch} from "store/store";

export const Form = () => {
    const dispatch = useTypedDispatch();

    const initialized = useAppSelector(selectInitialized)
    const positionDate = useAppSelector(selectPosition)

    // formik
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            position_id: 1,
            photo: '',
        },
        // validate: values => checkValidation(formik, values, setDisable),
        onSubmit: data => {
            dispatch(addUser(data));
            // setDisable(true);
            console.log(data)
            // formik.resetForm();
        },
    });
    // formik

    useEffect(() => {
        dispatch(getPositionTC())
        dispatch(getToken())
    }, [])

    return (
        <div className={`container ${s.form__box}`}>
            <h2 className='title'>Working with POST request</h2>
            <form className={s.form__wrapper} onSubmit={formik.handleSubmit}>
                <SuperInput className={s.form__input} placeholder="Your name" {...formik.getFieldProps('name')}/>
                <SuperInput className={s.form__input} placeholder="Email" {...formik.getFieldProps('email')}/>
                <label className={s.form__label}>
                    <SuperInput className={s.form__input} placeholder="Phone" {...formik.getFieldProps('position_id')}/>
                    +38 (XXX) XXX - XX - XX
                    {/* <span className={s.form__label_span}>+38 (XXX) XXX - XX - XX</span> */}
                </label>
                <div className={s.form__select_wrap}>
                    {initialized && <img className='preloader' src={preloader} alt="preloader"/>}

                    <p className={s.form__select_text}>Select your position</p>

                    {positionDate.map(e => (
                        <label key={e.id} className={s.form__select_item}>
                            {/* <SuperRadio className={s.form__radio} value={e.id} name="radio"/> */}
                            <SuperRadio className={s.form__radio} value={e.id} name="radio"/>
                            <span className={s.form__check_style}/>
                            {e.name}
                        </label>
                    ))}
                </div>
                <label className={s.label}>
                    {/* <input className="choose" type="file" name="avatar" {...formik.getFieldProps('photo')}/> */}
                    <input className="choose" type="file" name="avatar"  {...formik.getFieldProps('photo')}/>
                    <span className={s.button}>Upload</span>
                    <span className={s.labelTwo}>Upload your photo</span>
                </label>
                <button type='button'>Sign up</button>
            </form>
        </div>
    );
};

