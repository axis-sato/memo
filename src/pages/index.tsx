import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Link href="/new">new</Link>
    </Layout>
  );
};

export default Home;
