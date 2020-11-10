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
    margin: {
      small: {
        display: "inline-block",
        marginBottom: "$_5",
      },
      medium: {
        display: "inline-block",
        marginBottom: "$1",
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
  url?: string;
  state?: "active" | "inactive";
  decoration?: "plain" | "underline";
  margin?: any;
}

export default function NavLink({
  children,
  url,
  state,
  decoration,
  margin,
}: NavLinkProps): ReactElement {
  const external =
    url.startsWith("http") || url.startsWith("mailto") || url.startsWith("#");
  return (
    <>
      {external ? (
        <A
          href={url}
          decoration={decoration}
          margin={margin}
          state={state}
          target="_blank"
          rel="noreferrer"
          tabIndex={0}
        >
          {children}
        </A>
      ) : (
        <Link href={url} passHref={true}>
          <A decoration={decoration} margin={margin} state={state} tabIndex={0}>
            {children}
          </A>
        </Link>
      )}
    </>
  );
}
