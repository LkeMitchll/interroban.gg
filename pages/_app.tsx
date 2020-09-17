import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import "public/fonts/fonts.css";
import { Layout } from "components";
import { GlobalStyles } from "designSystem";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
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
