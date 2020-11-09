import React, { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import MarkDown from "../../common/MarkDown";

const BodyInput: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  ...rest
}) => {
  const methods = useFormContext();
  const body = methods.watch("body");

  return (
    <div>
      Body:
      <textarea
        name="body"
        ref={methods.register({ required: "本文を入力してください。" })}
        {...rest}
      ></textarea>
      {methods.errors.body?.message}
      <MarkDown>{body}</MarkDown>
    </div>
  );
};

export default BodyInput;
