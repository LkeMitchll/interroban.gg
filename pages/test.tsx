import type { GetStaticProps } from "next";
import { ContentAPI } from "services/contentful";
import { ReactElement } from "react";
import { Asset, Page } from "services/contentful.types";
import { Markdown } from "components";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("gs1BugZQXA8mN7DniEOFx");
  const images = await api.fetchMultipleAssets(page.contentMarkdown.images);
  return { props: { page, images } };
};

interface TestProps {
  page: Page;
  images: Asset[];
}

function Test({ page, images }: TestProps): ReactElement {
  return <Markdown source={page.contentMarkdown.markdown} images={images} />;
}

export default Test;
