import React, { ButtonHTMLAttributes } from "react";

type OnClickProp = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> &
    OnClickProp & {
      // type?: "submit" | "reset" | "button";
      loading?: boolean;
    }
> = ({ children, onClick, type, loading = false, ...rest }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      style={{ cursor: "pointer" }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
