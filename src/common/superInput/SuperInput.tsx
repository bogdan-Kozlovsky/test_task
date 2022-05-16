import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent,
    memo,
} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
    >;

type SuperInputPropsType = DefaultInputPropsType & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText: (value: string) => void;
    type: string;
    onEnter: () => void;
    error: string | null | boolean;
    spanClassName: string;
    inputClassName: string;
    handlerShowPassword: any;
    placeholder:string
};

export const SuperInput = memo((props: Partial<SuperInputPropsType>) => {
    const {
        type,
        onChange,
        onChangeText,
        onKeyPress,
        onEnter,
        error,
        className,
        placeholder,
        spanClassName,
        inputClassName,
    } = props;

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // eslint-disable-next-line no-unused-expressions
        onChange && // если есть пропс onChange
        onChange(e); // то передать ему е (поскольку onChange не обязателен)

        // eslint-disable-next-line no-unused-expressions
        onChangeText && onChangeText(e.currentTarget.value);
    };

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        // eslint-disable-next-line no-unused-expressions
        onKeyPress && onKeyPress(e);

        // eslint-disable-next-line no-unused-expressions
        e.key === 'Enter' && // если нажата кнопка Enter
        onEnter && // и есть пропс onEnter
        onEnter(); // то вызвать его
    };

    return (
        <input
            type={type || 'text'}
            onChange={onChangeCallback}
            onKeyPress={onKeyPressCallback}
            className={className}
            placeholder={placeholder}
        />
    );
});
