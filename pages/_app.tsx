import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import { GlobalStyles } from "../components/designSystem";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
