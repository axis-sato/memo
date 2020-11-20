import { AppProps } from "next/dist/next-server/lib/router/router";
import AuthProvider from "../features/auth/AuthProvider";
import "../styles/index.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <div className="w-full p-10 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </AuthProvider>
  );
};

export default MyApp;
