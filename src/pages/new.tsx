import { NextPage } from "next";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../components/common/Button";
import Layout from "../components/layout/Layout";
import BodyInput from "../components/page/new/BodyInput";
import TagInput from "../components/page/new/TagInput";
import TitleInput from "../components/page/new/TitleInput";
import { useCreateMemo } from "../components/page/new/useCreateMemo";
import { useRouter } from "next/router";
import { routes } from "../utils/routes";
import ErrorToast from "../components/common/ErrorToast";

interface Input {
  title: string;
  tags: string;
  body: string;
}

const New: NextPage = () => {
  const methods = useForm<Input>();
  const { createMemo, error } = useCreateMemo();
  const router = useRouter();

  const onSubmit = async (data: Input) => {
    const tags = data.tags.split(",");
    const result = await createMemo({ ...data, tags: tags });
    if (result) {
      router.push(routes.home);
    }
  };

  return (
    <Layout>
      <ErrorToast error={error}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            <TitleInput />
            <TagInput />
            <BodyInput />
          </FormProvider>
          <Button type="submit" className="btn btn-green">
            Save
          </Button>
          <Link href={routes.home} passHref>
            <Button className="btn btn-cancel">Cancel</Button>
          </Link>
        </form>
      </ErrorToast>
    </Layout>
  );
};

export default New;
