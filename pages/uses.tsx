import { PageMeta, RichText } from "components";
import { Hero } from "compositions";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import { Asset, Page } from "services/contentful.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("5SoTrD2jI0S0AhFkkEDheb");
  const heroImage = await api.fetchAsset("53QRaqT5sCB9hDJvRw8I8W");
  return { props: { page, heroImage } };
};

export default function UsesPage({
  page,
  heroImage,
}: {
  page: Page;
  heroImage: Asset;
}): ReactElement {
  return (
    <>
      <PageMeta title={page.title} />
      <Hero title={page.title} image={heroImage} intro={page.description} />
      <RichText source={page.content} />
    </>
  );
}
