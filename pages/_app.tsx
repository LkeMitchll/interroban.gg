import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import "public/fonts/fonts.css";
import { Layout } from "components";
import { GlobalStyles } from "designSystem";
import { darkThemeClass } from "tokens";
import useDarkMode from "use-dark-mode";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useDarkMode(undefined, {
    classNameDark: darkThemeClass,
    classNameLight: "theme-default",
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
