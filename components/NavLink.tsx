import Link from "next/link";
import { styled } from "stitches";
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
      disabled: {
        opacity: "0.8",
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
  },
});

interface NavLinkProps {
  children: React.ReactNode;
  url?: string;
  state?: "active" | "inactive" | "disabled";
  decoration?: "plain" | "underline";
}

export default function NavLink({
  children,
  url,
  state,
  decoration,
}: NavLinkProps): ReactElement {
  const external =
    url.startsWith("http") || url.startsWith("mailto") || url.startsWith("#");
  return (
    <>
      {external ? (
        <A
          href={url}
          decoration={decoration}
          state={state}
          target="_blank"
          rel="noreferrer"
          tabIndex={0}
        >
          {children}
        </A>
      ) : (
        <Link href={url} passHref={true}>
          <A decoration={decoration} state={state} tabIndex={0}>
            {children}
          </A>
        </Link>
      )}
    </>
  );
}
