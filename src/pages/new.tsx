import { NextPage } from "next";
import Button from "../components/common/Button";
import Layout from "../components/layout/Layout";
import AppName from "../components/page/new/AppName";
import BodyInput from "../components/page/new/BodyInput";
import TitleInput from "../components/page/new/TitleInput";

const New: NextPage = () => {
  return (
    <Layout>
      <AppName />
      <TitleInput />
      <BodyInput />
      <Button onClick={() => console.log("save")}>Save</Button>
    </Layout>
  );
};

export default New;
