import { theme } from "tokens";
import { ReactElement } from "react";

const GlobalStyles = (): ReactElement => (
  <style global jsx>
    {`
      html {
        font-size: 16px;
      }

      body {
        background-color: ${theme.colors.$bg};
        color: ${theme.colors.$primary};
        margin-top: ${theme.space.$2};
        padding: 0 1rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        font-feature-settings: "case" on;
      }

      @media screen and (min-width: 600px) {
        html {
          font-size: calc(18px + 2 * ((100vw - 320px) / 680));
        }

        body {
          padding: 0 5vw;
        }
      }

      @media screen and (min-width: 1600px) {
        html {
          font-size: 21px;
        }

        body {
          padding: 0 15vw;
        }
      }

      p {
        font-feature-settings: "ss01" on, "ss02" on;
      }
    `}
  </style>
);

export default GlobalStyles;
