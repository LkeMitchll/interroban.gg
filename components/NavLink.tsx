import Link from "next/link";
import { styled } from "tokens";
import { ReactElement } from "react";

const A = styled("a", {
  color: "$primary",
  fontFamily: "$mono",
  fontSize: "$3",
  textDecoration: "none",
  cursor: "pointer",

  ":hover": {
    fontStyle: "italic",
  },

  variants: {
    decoration: {
      plain: {},
      underline: {
        borderBottom: "$1 solid $primary",
      },
    },
    state: {
      inactive: {
        fontStyle: "normal",
      },
      active: {
        fontStyle: "italic",
      },
    },
  },
});

interface NavLinkProps {
  children: React.ReactNode;
  url: string;
  plain?: boolean;
  active?: boolean;
}

export default function NavLink({
  children,
  url,
  plain,
  active,
}: NavLinkProps): ReactElement {
  const external =
    url.startsWith("http") || url.startsWith("mailto") || url.startsWith("#");
  return (
    <>
      {external ? (
        <A
          href={url}
          decoration={plain ? "plain" : "underline"}
          state={active ? "active" : "inactive"}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </A>
      ) : (
        <Link href={url}>
          <A
            decoration={plain ? "plain" : "underline"}
            state={active ? "active" : "inactive"}
          >
            {children}
          </A>
        </Link>
      )}
    </>
  );
}
