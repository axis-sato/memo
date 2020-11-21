import { useRouter } from "next/router";
import { useEffect } from "react";
import { routes } from "../../utils/routes";
import { useAuth } from "./useAuth";

const Private: React.FC = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!(currentUser || loading)) {
      router.push(routes.signin);
    }
  }, [currentUser, loading, router]);

  return <>{children}</>;
};

export default Private;
