import Head from "next/head";
import { styled } from "tokens";
import { Transition } from "components";
import { Header, Footer } from "compositions";
import { ReactElement } from "react";
import { useRouter } from "next/router";

const Main = styled("main", {
  marginTop: "$3",
  marginBottom: "$3",
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  const router = useRouter();
  const isBlogPost = router.route === "/post/[slug]";
  return (
    <>
      <Head>
        <title>Luke Mitchell</title>
      </Head>

      <Header />
      <Transition location={router.asPath}>
        <Main>{children}</Main>
      </Transition>
      {!isBlogPost ? <Footer /> : null}
    </>
  );
}
