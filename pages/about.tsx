import { Hero, History, PageMeta, RichText } from "components";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import type { Asset, List, Page } from "services/contentful.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("gs1BugZQXA8mN7DniEOFx");
  const experience = await api.fetchList("4GpYef6usWILucVp1ZYNi9");
  const hero = await api.fetchAsset("5ZI6Cx1N7O5KG8ikkg1wv7");
  const headshot = await api.fetchAsset("67CIdWsQZqjaJkMPMxOjnQ");
  return { props: { page, experience, hero, headshot } };
};

interface PageProps {
  page: Page;
  experience: List;
  hero: Asset;
  headshot: Asset;
}

export default function AboutPage({
  page,
  experience,
  hero,
  headshot,
}: PageProps): ReactElement {
  return (
    <>
      <PageMeta title={page.title} />
      <Hero image={hero} title={page.title} />
      <RichText source={page.content} />
      <History experience={experience} headshot={headshot} />
    </>
  );
}
