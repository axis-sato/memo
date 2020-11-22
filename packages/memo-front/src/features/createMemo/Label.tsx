import { LabelHTMLAttributes } from "react";

const Label: React.FC<LabelHTMLAttributes<HTMLLabelElement>> = ({
  children,
  ...rest
}) => {
  return (
    <label className="block text-green-300 text-sm font-bold mb-1" {...rest}>
      {children}
    </label>
  );
};

export default Label;
