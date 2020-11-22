import { useFormContext } from "react-hook-form";
import Input from "../../components/Input";
import Label from "./Label";

const TagInput: React.FC = () => {
  const methods = useFormContext();

  return (
    <div className="mb-4">
      <Label htmlFor="tags">Tags</Label>
      <Input
        name="tags"
        placeholder="js,typescript"
        className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
        ref={methods.register}
      />
    </div>
  );
};

export default TagInput;
