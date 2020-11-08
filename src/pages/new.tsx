import { NextPage } from "next";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../components/common/Button";
import Layout from "../components/layout/Layout";
import AppName from "../components/page/new/AppName";
import BodyInput from "../components/page/new/BodyInput";
import TagInput from "../components/page/new/TagInput";
import TitleInput from "../components/page/new/TitleInput";

interface Input {
  title: string;
  tags: string;
  body: string;
}

const New: NextPage = () => {
  const methods = useForm<Input>();
  const onSubmit = (data: Input) => console.log(data);

  return (
    <Layout>
      <AppName />
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <TitleInput />
          <TagInput />
          <BodyInput />
        </FormProvider>
        <Button type="submit">Save</Button>
      </form>
    </Layout>
  );
};

export default New;
