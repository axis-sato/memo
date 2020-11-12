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
      <div className="flex border rounded-lg h-80vh">
        <textarea
          name="body"
          rows={10}
          placeholder="本文..."
          className="resize-x text-gray-700 flex-auto px-3 py-2 w-1/2 h-full"
          ref={methods.register({ required: "本文を入力してください。" })}
          {...rest}
        ></textarea>
        {methods.errors.body?.message}
        <div className="flex-auto px-3 py-2 w-1/2 overflow-hidden">
          <div className="flex-1 overflow-y-scroll h-full">
            <MarkDown>{body}</MarkDown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyInput;
