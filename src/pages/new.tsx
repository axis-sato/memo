import { NextPage } from "next";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import Button from "../components/Button";
import Layout from "../components/layout/Layout";
import BodyInput from "../features/createMemo/BodyInput";
import TagInput from "../features/createMemo/TagInput";
import TitleInput from "../features/createMemo/TitleInput";
import { useCreateMemo } from "../features/createMemo/useCreateMemo";
import { useRouter } from "next/router";
import { routes } from "../utils/routes";
import ErrorToast from "../components/ErrorToast";

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
