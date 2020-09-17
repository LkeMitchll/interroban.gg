import { GetStaticProps } from "next";
import { ContentAPI } from "services/contentful";
import { Intro } from "compositions";
import { ReactElement } from "react";
import { Page } from "services/contentful.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("gs1BugZQXA8mN7DniEOFx");
  return { props: page };
};

const Home = (page: Page): ReactElement => {
  return <Intro content={page} />;
};

export default Home;
