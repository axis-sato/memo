import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";
import gfm from "remark-gfm";

const MarkDown: React.FC<{ children: string }> = ({ children }) => {
  return (
    <ReactMarkdown
      className="markdown"
      plugins={[gfm]}
      renderers={{ code: CodeBlock }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MarkDown;
