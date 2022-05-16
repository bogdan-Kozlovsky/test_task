import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
    >;
type SuperCheckboxPropsType = DefaultInputPropsType & {
    // eslint-disable-next-line react/require-default-props
    onChangeChecked?: (checked: boolean) => void;
};

export const SuperRadio: React.FC<SuperCheckboxPropsType> = ({
                                                                    type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
                                                                    onChange,
                                                                    onChangeChecked,
                                                                    children,
                                                                 className// в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
                                                                }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // сделайте так чтоб работал onChange и onChangeChecked
        // eslint-disable-next-line no-unused-expressions
        onChange && onChange(e);

        // eslint-disable-next-line no-unused-expressions
        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    };

    return (
        <input
            type="radio"
            onChange={onChangeCallback}
            className={className}
        />
    );
};
