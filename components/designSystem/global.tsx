import { ReactElement } from "react";
import { Tokens } from ".";

const GlobalStyles = (): ReactElement => (
  <style global jsx>
    {`
      html {
        font-size: 14px;
      }

      @media screen and (min-width: ${Tokens.breakpoints.small}) {
        html {
          font-size: 16px;
        }
      }

      @media screen and (min-width: ${Tokens.breakpoints.medium}) {
        html {
          font-size: 18px;
        }
      }
      @media screen and (min-width: ${Tokens.breakpoints.large}) {
        html {
          font-size: 20px;
        }
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
