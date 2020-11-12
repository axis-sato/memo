import Head from "next/head";
import AppName from "../common/AppName";

const Layout: React.FC<{ title?: string }> = ({ children, title = "memo" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <AppName />
      <div>{children}</div>
    </>
  );
};

export default Layout;
