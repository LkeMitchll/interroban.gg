import { GetStaticProps } from "next";
import { ContentAPI } from "services/contentful";
import { Intro } from "compositions";
import { ReactElement } from "react";
import { Page, Asset } from "services/contentful.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("gs1BugZQXA8mN7DniEOFx");
  const hero = await api.fetchAsset("5ZI6Cx1N7O5KG8ikkg1wv7");
  return { props: { page, hero } };
};

const Home = ({ page, hero }: { page: Page; hero: Asset }): ReactElement => {
  return <Intro content={page} image={hero} />;
};

export default Home;
