import AuthProvider from "../features/auth/AuthProvider";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="w-full p-10 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </AuthProvider>
  );
}

export default MyApp;
