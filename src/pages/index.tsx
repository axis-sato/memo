import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import CreateMemoButton from "../components/page/home/CreateMemoButton";
import { useFetchMemos } from "../components/page/home/fetchMemos";
import Memo from "../components/page/home/Memo";
import InfiniteScroll from "react-infinite-scroll-component";
import Refetch from "../components/page/home/Refetch";

const Home: NextPage = () => {
  const { memos, fetchMemos, hasMore, error } = useFetchMemos();
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
      {error !== null ? <Refetch refetch={fetchMemos} /> : null}
    </Layout>
  );
};

export default Home;
