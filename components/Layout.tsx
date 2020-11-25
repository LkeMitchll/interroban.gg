import { SiteFooter, SiteHeader } from "components";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { css } from "stitches";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  const router = useRouter();
  const isBlogPost = router.route === "/post/[slug]";
  const fontFiles = [
    "Blanco-Regular",
    "pitch-web-semibold",
    "GT-America-Extended-Medium",
  ];
  const Main = css({
    marginTop: "$3",
    marginBottom: "$3",
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/images/favicon.svg" rel="icon" type="image/svg+xml" />
        <link color="#000" href="/images/favicon.svg" rel="mask-icon" />
        {fontFiles.map((font, i) => (
          <link
            key={i}
            rel="preload"
            href={`fonts/${font}.subset.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
        ))}
      </Head>

      <SiteHeader />
      <motion.main
        key={router.route}
        initial="pageInitial"
        animate="pageLoaded"
        transition={{ duration: 0.5 }}
        variants={{
          pageInitial: { opacity: 0 },
          pageLoaded: { opacity: 1 },
        }}
        className={Main.toString()}
      >
        {children}
      </motion.main>
      {!isBlogPost ? <SiteFooter /> : null}
    </>
  );
}
