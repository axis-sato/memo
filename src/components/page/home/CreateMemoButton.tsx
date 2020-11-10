import Link from "next/link";
import { routes } from "../../../utils/routes";

const CreateMemoButton: React.FC = () => {
  return (
    <Link href={routes.new} passHref>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4">
        Create a Memo!
      </button>
    </Link>
  );
};

export default CreateMemoButton;
