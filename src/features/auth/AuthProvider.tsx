import { createContext } from "react";
import { AuthType, useProvideAuth } from "./useProvideAuth";

export const authContext = createContext<AuthType>(null);

const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export default AuthProvider;
