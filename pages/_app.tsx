import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import { Layout } from "components";
import { GlobalStyles } from "designSystem";
import { darkThemeClass } from "stitches";
import useDarkMode from "use-dark-mode";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: "theme-default",
    storageKey: null,
  });

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
