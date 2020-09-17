import Head from "next/head";
import { styled } from "tokens";
import { Header, Footer } from "compositions";
import { ReactElement } from "react";

const Main = styled("main", {
  marginTop: "$3",
  marginBottom: "$3",
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <>
      <Head>
        <title>Luke Mitchell</title>
      </Head>

      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
