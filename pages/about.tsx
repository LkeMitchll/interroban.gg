import { GetStaticProps } from "next";
import { ContentAPI } from "services/contentful";
import { RichText } from "components";
import { ReactElement } from "react";
import { Page } from "services/contentful.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("gs1BugZQXA8mN7DniEOFx");
  return { props: page };
};

export default function AboutPage(page: Page): ReactElement {
  return <RichText source={page.content} />;
}
