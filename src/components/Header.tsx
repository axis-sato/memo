import { useAuth } from "../features/auth/useAuth";
import Button from "./Button";

const Header: React.FC = () => {
  const { signout } = useAuth();
  return (
    <div className="pb-5 flex">
      <div className="text-5xl	">{process.env.APP_NAME}</div>
      <div className="flex-grow"></div>
      <Button className="btn btn-green self-center" onClick={signout}>
        Signout
      </Button>
    </div>
  );
};

export default Header;
