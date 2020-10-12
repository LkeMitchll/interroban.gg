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
        <link href="/images/favicon.svg" rel="icon" type="image/svg+xml" />
        <link color="#000" href="/images/favicon.svg" rel="mask-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <Transition location={router.asPath}>
        <Main>{children}</Main>
      </Transition>
      {!isBlogPost ? <Footer /> : null}
    </>
  );
}
