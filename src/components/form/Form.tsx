import React, {useEffect} from 'react';

import preloader from "assets/icons/preloader.svg";
import {useAppSelector} from "common/hook/useAppSelectorHook";
import {SuperInput} from "common/superInput/SuperInput";
import {SuperRadio} from "common/superRadio/SuperRadio";
import s from 'components/form/style.module.scss'
import {getPositionTC} from "store/reducer/form/form-reducer";
import {selectInitialized, selectPosition} from "store/selectors/selectors";
import {useTypedDispatch} from "store/store";

export const Form = () => {
    const dispatch = useTypedDispatch();

    const initialized = useAppSelector(selectInitialized)
    useEffect(() => {
        dispatch(getPositionTC())
    }, [])

    const positionDate = useAppSelector(selectPosition)

    return (
        <div className="container">
            <h2 className='title'>Working with POST request</h2>
            <form className={s.form__wrapper}>
                <SuperInput className={s.form__input} placeholder="Your name"/>
                <SuperInput className={s.form__input} placeholder="Email"/>
                <label className={s.form__label}>
                    <SuperInput className={s.form__input} placeholder="Phone"/>
                    +38 (XXX) XXX - XX - XX
                    {/* <span className={s.form__label_span}>+38 (XXX) XXX - XX - XX</span> */}
                </label>
                <div className={s.form__select_wrap}>
                    {initialized && <img className='preloader' src={preloader} alt="preloader"/>}

                    <p className={s.form__select_text}>Select your position</p>
                    {positionDate.map(e => (
                        <label key={e.id} className={s.form__select_item}>
                            <SuperRadio className={s.form__radio}/>
                            {e.name}
                        </label>
                    ))}
                </div>
            </form>
        </div>
    );
};

