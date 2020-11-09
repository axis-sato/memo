import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useFetchMemos } from "../components/page/home/fetchMemos";
import Memo from "../components/page/home/Memo";

const Home: NextPage = () => {
  const { memos } = useFetchMemos();
  return (
    <Layout>
      <Link href="/new">new</Link>
      {memos.map((memo) => (
        <Memo key={memo.id} memo={memo} />
      ))}
    </Layout>
  );
};

export default Home;
