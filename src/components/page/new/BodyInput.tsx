import React, { TextareaHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../common/CodeBlock";
import gfm from "remark-gfm";

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
      <ReactMarkdown plugins={[gfm]} renderers={{ code: CodeBlock }}>
        {body}
      </ReactMarkdown>
    </div>
  );
};

export default BodyInput;
