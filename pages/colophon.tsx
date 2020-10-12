import { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import { Page } from "services/contentful.types";
import { Hero } from "compositions";
import { GetStaticProps } from "next";
import { PageMeta, RichText } from "components";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("3TxaAfROQOMMOtj5U6E4qG");
  return { props: { page } };
};

interface ColophonProps {
  page: Page;
}

export default function Colophon({ page }: ColophonProps): ReactElement {
  return (
    <>
      <PageMeta title={page.title} />
      <Hero title={page.title} intro={page.description} />
      <RichText source={page.content} />
    </>
  );
}
