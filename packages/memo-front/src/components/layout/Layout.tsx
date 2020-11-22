import Head from "next/head";
import React from "react";
import Header from "../Header";

const Layout: React.FC<{ title?: string }> = ({ children, title = "memo" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
