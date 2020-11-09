import MarkDown from "../../common/MarkDown";
import { Memo as MemoType } from "./fetchMemos";

const Memo: React.FC<{ memo: MemoType }> = ({ memo }) => {
  return (
    <div key={memo.id}>
      <p>title: {memo.title}</p>
      <p>
        body: <MarkDown>{memo.body}</MarkDown>{" "}
      </p>
      <p>tags: {memo.tags.join(",")}</p>
      <hr />
    </div>
  );
};

export default Memo;
