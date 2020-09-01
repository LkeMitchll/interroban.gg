import Head from "next/head";
import type { ReactElement } from "react";
import { About } from "../components/compositions/Home";
import { Header } from "../components/compositions";

const Home = (): ReactElement => (
  <>
    <Head>
      <title>Luke Mitchell</title>
    </Head>

    <Header />
    <main>
      <About />
    </main>
  </>
);

export default Home;
