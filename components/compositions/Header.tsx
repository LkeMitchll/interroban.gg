import { ReactElement } from "react";
import { Tokens } from "../designSystem";
import { Nav, Logo } from "../";

export default function Header(): ReactElement {
  return (
    <>
      <nav>
        <Logo />
        <Nav />
      </nav>

      <style jsx>{`
        nav {
          display: grid;
          grid-template: "a a a b" auto / 1fr 1fr 1fr 1fr;
        }

        @media screen and (min-width: ${Tokens.breakpoints.small}) {
          nav {
            grid-template: "a a b b" auto / 1fr 1fr 1fr 1fr;
          }
        }

        nav :global(.logo) {
          grid-area: a;
        }

        nav :global(ul) {
          grid-area: b;
        }
      `}</style>
    </>
  );
}
