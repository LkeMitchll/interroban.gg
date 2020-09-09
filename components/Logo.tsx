import { ReactElement } from "react";
import Link from "next/link";
import { Heading } from "./designSystem";
import { Tokens } from "./designSystem";

export default function Logo(): ReactElement {
  return (
    <>
      <div className="logo">
        <Link href="/">
          <a>
            <Heading>
              Luke Mitchell? <span>Product Designer!</span>
            </Heading>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .logo {
          align-items: flex-end;
        }

        .logo :global(h1) {
          font-size: ${Tokens.fontSizes[1]};
          letter-spacing: -0.5px;
          line-height: ${Tokens.lineHeights.crushed};
        }

        a {
          text-decoration: none;
        }

        span {
          display: block;
          font-weight: ${Tokens.fontWeights.reg};
        }
      `}</style>
    </>
  );
}
