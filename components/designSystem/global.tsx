import { theme } from "tokens";
import { ReactElement } from "react";

const GlobalStyles = (): ReactElement => (
  <style global jsx>
    {`
      html {
        font-size: 16px;
        background-color: ${theme.colors.$bg};
      }

      body {
        background-color: ${theme.colors.$bg};
        color: ${theme.colors.$primary};
        margin-top: ${theme.space.$3};
        padding: 0 1rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }

      @media screen and (min-width: 600px) {
        html {
          font-size: calc(18px + 2 * ((100vw - 320px) / 680));
        }

        body {
          padding: 0 5vw;
        }
      }

      @media screen and (min-width: 1000px) {
        html {
          font-size: calc(20px + 4 * ((100vw - 1000px) / 680));
        }

        body {
          padding: 0 10vw;
        }
      }

      @media screen and (min-width: 1600px) {
        html {
          font-size: 22px;
        }

        body {
          padding: 0 15vw;
        }
      }
    `}
  </style>
);

export default GlobalStyles;