import { useFormContext } from "react-hook-form";
import Input from "../../common/Input";

const TitleInput: React.FC = () => {
  const methods = useFormContext();

  return (
    <div>
      Title:
      <Input name="title" ref={methods.register} />
    </div>
  );
};

export default TitleInput;
