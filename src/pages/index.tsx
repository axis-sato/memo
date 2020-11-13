import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import CreateMemoButton from "../components/page/home/CreateMemoButton";
import { useFetchMemos } from "../components/page/home/fetchMemos";
import Memo from "../components/page/home/Memo";
import InfiniteScroll from "react-infinite-scroll-component";

const Home: NextPage = () => {
  const { memos, fetchMemos, hasMore } = useFetchMemos();
  return (
    <Layout>
      <CreateMemoButton />
      <InfiniteScroll
        dataLength={memos.length}
        next={fetchMemos}
        hasMore={hasMore}
        loader={<>loading...</>}
      >
        {memos.map((memo) => (
          <Memo key={memo.id} memo={memo} />
        ))}
      </InfiniteScroll>
    </Layout>
  );
};

export default Home;
