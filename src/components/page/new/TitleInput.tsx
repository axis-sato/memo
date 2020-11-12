import { useFormContext } from "react-hook-form";
import Input from "../../common/Input";
import Label from "./Label";

const TitleInput: React.FC = () => {
  const methods = useFormContext();

  return (
    <div className="mb-4">
      <Label htmlFor="title">Title</Label>
      <Input
        name="title"
        className="w-full border bg-white rounded px-3 py-2 outline-none text-gray-700"
        ref={methods.register({ required: "タイトルを入力してください。" })}
      />
      {methods.errors.title?.message}
    </div>
  );
};

export default TitleInput;
