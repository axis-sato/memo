import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="w-full p-10 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
