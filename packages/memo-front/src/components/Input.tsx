import React, { InputHTMLAttributes } from "react";

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
> = ({ name, ...rest }, ref) => {
  return <input name={name} ref={ref} {...rest} />;
};

export default React.forwardRef(Input);
