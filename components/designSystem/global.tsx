import { theme } from "stitches";
import type { ReactElement } from "react";

const GlobalStyles = (): ReactElement => (
  <style global jsx>
    {`
      @font-face {
        font-family: "GT America Extended";
        font-weight: 600;
        font-style: bold;
        font-display: swap;
        src: url(/fonts/GT-America-Extended-Medium.subset.woff2) format("woff2"),
          url(/fonts/GT-America-Extended-Medium.subset.woff) format("woff");
      }

      @font-face {
        font-family: "Blanco";
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        src: url(/fonts/Blanco-Regular.subset.woff2) format("woff2"),
          url(/fonts/Blanco-Regular.subset.woff) format("woff");
      }

      @font-face {
        font-family: "Blanco";
        font-weight: 400;
        font-style: italic;
        font-display: swap;
        src: url(/fonts/Blanco-Italic.subset.woff2) format("woff2"),
          url(/fonts/Blanco-Italic.subset.woff) format("woff");
      }

      @font-face {
        font-family: "Blanco";
        font-weight: 600;
        font-style: normal;
        font-display: swap;
        src: url(/fonts/Blanco-Medium.subset.woff2) format("woff2"),
          url(/fonts/Blanco-Medium.subset.woff) format("woff");
      }

      @font-face {
        font-family: "Pitch";
        font-weight: 600;
        font-style: normal;
        font-display: swap;
        src: url(/fonts/pitch-web-semibold.subset.woff2) format("woff2"),
          url(/fonts/pitch-web-semibold.subset.woff) format("woff");
      }

      @font-face {
        font-family: "Pitch";
        font-weight: 600;
        font-style: italic;
        font-display: swap;
        src: url(/fonts/pitch-web-semibold-italic.subset.woff2) format("woff2"),
          url(/fonts/pitch-web-semibold-italic.subset.woff) format("woff");
      }

      html {
        font-size: 17px;
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

      *:focus {
        outline-color: ${theme.colors.$faded};
        outline-style: none;
        outline-width: 0;
        border-bottom: 2px solid ${theme.colors.$secondary};
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
