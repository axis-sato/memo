import { useFormContext } from "react-hook-form";
import Input from "../../common/Input";

const TagInput: React.FC = () => {
  const methods = useFormContext();

  return (
    <div>
      Tags:
      <Input name="tags" ref={methods.register} />
    </div>
  );
};

export default TagInput;
