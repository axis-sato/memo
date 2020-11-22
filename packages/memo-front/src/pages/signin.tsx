import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Button from "../components/Button";
import { useAuth } from "../features/auth/useAuth";
import { routes } from "../utils/routes";

const Signin = () => {
  const { signinWithGoogle, currentUser } = useAuth();
  const router = useRouter();

  const handleSignin = async () => {
    await signinWithGoogle();
  };

  useEffect(() => {
    if (currentUser !== null) {
      router.push(routes.home);
    }
  }, [currentUser, router]);

  return (
    <div>
      <Button className="btn btn-green" onClick={handleSignin}>
        GoogleでSigin
      </Button>
    </div>
  );
};

export default Signin;
