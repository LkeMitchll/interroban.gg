import Head from "next/head";
import { GetStaticProps } from "next";
import { ContentAPI } from "services/contentful";
import { Header, Intro, Footer } from "compositions";
import { ReactElement } from "react";
import { Page } from "services/contentful.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("gs1BugZQXA8mN7DniEOFx");
  return { props: page };
};

const Home = (page: Page): ReactElement => {
  return (
    <>
      <Head>
        <title>Luke Mitchell</title>
      </Head>

      <Header />
      <main>
        <Intro content={page} />
      </main>
      <Footer />
    </>
  );
};

export default Home;