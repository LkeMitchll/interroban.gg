import { ReactElement } from "react";

const GlobalStyles = (): ReactElement => (
  <style global jsx>
    {`
      html {
        font-size: 14px;
      }

      body {
        color: black;
        margin-top: 6rem;
        padding: 0 1rem;
      }

      @media screen and (min-width: 600px) {
        html {
          font-size: calc(15px + 2 * ((100vw - 320px) / 680));
        }

        body {
          padding: 0 5vw;
        }
      }

      @media screen and (min-width: 1000px) {
        html {
          font-size: calc(18px + 4 * ((100vw - 1000px) / 680));
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
