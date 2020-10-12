import { PageMeta, RichText } from "components";
import { Hero } from "compositions";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import { Page } from "services/contentful.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("5SoTrD2jI0S0AhFkkEDheb");
  return { props: { page } };
};

export default function UsesPage({ page }: { page: Page }): ReactElement {
  return (
    <>
      <PageMeta title={page.title} />
      <Hero title={page.title} intro={page.description} />
      <RichText source={page.content} />
    </>
  );
}
