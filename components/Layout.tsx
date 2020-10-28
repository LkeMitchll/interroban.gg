import Head from "next/head";
import { styled } from "stitches";
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
  const fontFiles = [
    "GT-America-Extended-Medium",
    "Blanco-Regular",
    "Blanco-Italic",
    "Blanco-Medium",
    "pitch-web-semibold",
    "pitch-web-semibold-italic",
  ];
  const preloadFonts = fontFiles.map((file, i) => (
    <link
      key={i}
      rel="preload"
      as="font"
      href={`/fonts/${file}.woff2`}
      type="font/woff2"
      crossOrigin="anonymous"
    />
  ));

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/images/favicon.svg" rel="icon" type="image/svg+xml" />
        <link color="#000" href="/images/favicon.svg" rel="mask-icon" />
        <link rel="preconnect" href="https://images.ctfassets.net" />
        {preloadFonts}
      </Head>

      <Header />
      <Transition location={router.asPath}>
        <Main>{children}</Main>
      </Transition>
      {!isBlogPost ? <Footer /> : null}
    </>
  );
}
