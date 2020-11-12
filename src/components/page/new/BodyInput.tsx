import React, { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import MarkDown from "../../common/MarkDown";
import Label from "./Label";

const BodyInput: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  ...rest
}) => {
  const methods = useFormContext();
  const body = methods.watch("body");

  return (
    <div className="mb-4">
      <Label htmlFor="body">Body</Label>
      <textarea
        name="body"
        rows={10}
        className="resize-none w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        ref={methods.register({ required: "本文を入力してください。" })}
        {...rest}
      ></textarea>
      {methods.errors.body?.message}
      <MarkDown>{body}</MarkDown>
    </div>
  );
};

export default BodyInput;
