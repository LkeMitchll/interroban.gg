import { Hero, History, Markdown, PageMeta } from "components";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import type { Asset, List, Page } from "services/contentful.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("gs1BugZQXA8mN7DniEOFx");
  const images = await api.fetchMultipleAssets(page.contentMarkdown.images);
  const experience = await api.fetchList("4GpYef6usWILucVp1ZYNi9");
  const hero = await api.fetchAsset("5ZI6Cx1N7O5KG8ikkg1wv7");
  const headshot = await api.fetchAsset("67CIdWsQZqjaJkMPMxOjnQ");
  return { props: { page, images, experience, hero, headshot } };
};

interface PageProps {
  page: Page;
  images: Asset[];
  experience: List;
  hero: Asset;
  headshot: Asset;
}

export default function AboutPage({
  page,
  images,
  experience,
  hero,
  headshot,
}: PageProps): ReactElement {
  return (
    <article>
      <PageMeta title={page.title} />
      <Hero image={hero} title={page.title} />
      <Markdown source={page.contentMarkdown.markdown} images={images} />
      <History experience={experience} headshot={headshot} />
    </article>
  );
}
