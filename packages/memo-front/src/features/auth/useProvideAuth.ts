import firebase, { auth } from "../../utils/firebase";
import { useEffect, useState } from "react";

export type AuthType = {
  currentUser: firebase.User | null;
  signinWithGoogle: () => Promise<void>;
  signout: () => Promise<void>;
  loading: boolean;
};

export const useProvideAuth = (): AuthType => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState(true);

  const signinWithGoogle = async (): Promise<void> => {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  const signout = async (): Promise<void> => {
    return await auth.signOut();
  };

  useEffect((): (() => void) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return { currentUser, signinWithGoogle, signout, loading };
};
