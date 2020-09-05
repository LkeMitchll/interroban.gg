import { GetStaticProps } from "next";
import { ContentAPI } from "../services/contentful";
import { ReactElement } from "react";
import { Page } from "../services/contentful.types";
import Head from "next/head";
import { About } from "../components/compositions/Home";
import { Header } from "../components/compositions";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("gs1BugZQXA8mN7DniEOFx");
  return { props: page };
};

const Home = (page: Page): ReactElement => (
  <>
    <Head>
      <title>Luke Mitchell</title>
    </Head>

    <Header />
    <main>
      <About content={page} />
    </main>
  </>
);

export default Home;
