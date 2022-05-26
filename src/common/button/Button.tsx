import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type SuperButtonPropsType = DefaultButtonPropsType & {};

export const Button = (props: SuperButtonPropsType) => {
  const { ...restProps } = props;
  return <button {...restProps} />;
};
