import MarkDown from "../../common/MarkDown";
import { Memo as MemoType } from "./useFetchMemos";
import Title from "./Title";
import Tag from "./Tag";

const Memo: React.FC<{ memo: MemoType }> = ({ memo }) => {
  return (
    <div key={memo.id} className="my-5">
      <Title>{memo.title}</Title>
      <p className="my-10">
        <MarkDown>{memo.body}</MarkDown>{" "}
      </p>
      <p className="mb-4 flex flex-wrap">
        {memo.tags.map((tag) => (
          <Tag key={tag} className="mr-1 mb-1">
            {tag}
          </Tag>
        ))}
      </p>
      <hr />
    </div>
  );
};

export default Memo;
