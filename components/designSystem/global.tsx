import { ReactElement } from "react";
import { Tokens } from ".";

const GlobalStyles = (): ReactElement => (
  <style global jsx>
    {`
      html {
        font-size: 14px;
      }

      body {
        color: ${Tokens.colors.primary};
        margin-top: ${Tokens.space[2]};
        padding: 0 ${Tokens.space[1]};
      }

      @media screen and (min-width: ${Tokens.breakpoints.small}) {
        html {
          font-size: calc(15px + 2 * ((100vw - 320px) / 680));
        }

        body {
          padding: 0 5vw;
        }
      }

      @media screen and (min-width: ${Tokens.breakpoints.large}) {
        html {
          font-size: calc(18px + 4 * ((100vw - 1000px) / 680));
        }

        body {
          padding: 0 10vw;
        }
      }

      @media screen and (min-width: ${Tokens.breakpoints.xlarge}) {
        html {
          font-size: 22px;
        }

        body {
          padding: 0 15vw;
        }
      }

      h1,
      h2,
      h3 {
        margin-bottom: ${Tokens.space[1]};
      }

      p {
        line-height: ${Tokens.lineHeights.default};
      }

      a {
        color: ${Tokens.colors.primary};
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
    `}
  </style>
);

export default GlobalStyles;
