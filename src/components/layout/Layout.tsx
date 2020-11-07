import Head from "next/head";

const Layout: React.FC<{ title?: string }> = ({ children, title = "memo" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
