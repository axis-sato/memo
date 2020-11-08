import { useFormContext } from "react-hook-form";
import Input from "../../common/Input";

const TagInput: React.FC = () => {
  const methods = useFormContext();

  return (
    <div>
      Tags:
      <Input name="tag" ref={methods.register} />
    </div>
  );
};

export default TagInput;
