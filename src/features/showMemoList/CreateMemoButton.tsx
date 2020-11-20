import Link from "next/link";
import { routes } from "../../utils/routes";
import Button from "../../components/Button";

const CreateMemoButton: React.FC = () => {
  return (
    <Link href={routes.new} passHref>
      <Button className="btn btn-green">Create a Memo!</Button>
    </Link>
  );
};

export default CreateMemoButton;
