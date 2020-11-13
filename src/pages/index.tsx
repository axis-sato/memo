import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import CreateMemoButton from "../components/page/home/CreateMemoButton";
import { useFetchMemos } from "../components/page/home/fetchMemos";
import Memo from "../components/page/home/Memo";

const Home: NextPage = () => {
  const { memos, fetchMemos } = useFetchMemos();
  return (
    <Layout>
      <CreateMemoButton />
      {memos.map((memo) => (
        <Memo key={memo.id} memo={memo} />
      ))}

      <button onClick={() => fetchMemos()}>more</button>
    </Layout>
  );
};

export default Home;
