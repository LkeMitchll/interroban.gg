import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import "public/fonts/fonts.css";
import { GlobalStyles } from "designSystem";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
