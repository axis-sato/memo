import { NextPage } from "next";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../components/common/Button";
import Layout from "../components/layout/Layout";
import AppName from "../components/page/new/AppName";
import BodyInput from "../components/page/new/BodyInput";
import TagInput from "../components/page/new/TagInput";
import TitleInput from "../components/page/new/TitleInput";
import { useCreateMemo } from "../components/page/new/useCreateMemo";
import { useRouter } from "next/router";
import { routes } from "../utils/routes";

interface Input {
  title: string;
  tags: string;
  body: string;
}

const New: NextPage = () => {
  const methods = useForm<Input>();
  const { createMemo } = useCreateMemo();
  const router = useRouter();

  const onSubmit = (data: Input) => {
    const tags = data.tags.split(",");
    createMemo({ ...data, tags: tags });
    router.push(routes.home);
  };

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
