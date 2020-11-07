import React, { InputHTMLAttributes } from "react";

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & {
    errorMessage?: string;
  }
> = ({ type = "text", errorMessage, ...rest }, ref) => {
  return (
    <label className={errorMessage ? "error" : ""}>
      <input type={type} {...rest} ref={ref} />
      {errorMessage ? (
        <p className="error_message overline">{errorMessage}</p>
      ) : null}
    </label>
  );
};

export default React.forwardRef(Input);
