import { ReactElement } from "react";
import { Tokens, Link } from "./designSystem";

export default function Nav(): ReactElement {
  return (
    <>
      <ul>
        <li>
          <Link url="#">About</Link>
        </li>
        <li>
          <Link url="#">Work</Link>
        </li>
        <li>
          <Link url="#">Bookmarks</Link>
        </li>
      </ul>

      <style jsx>{`
        ul {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        @media screen and (min-width: ${Tokens.breakpoints.small}) {
          ul {
            flex-direction: row;
          }
        }

        li {
          margin-right: ${Tokens.space[2]};
        }
      `}</style>
    </>
  );
}
