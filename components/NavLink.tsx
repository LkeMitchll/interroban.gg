import Link from "next/link";
import type { ReactElement } from "react";
import { styled } from "stitches";

const A = styled("a", {
  color: "$primary",
  fontFamily: "$mono",
  fontSize: "$3",
  textDecoration: "none",
  cursor: "pointer",
  transition: "border-color 0.25s ease",

  ":hover": {
    fontStyle: "italic",
    borderColor: "$secondary",
  },

  variants: {
    decoration: {
      plain: {},
      underline: {
        borderBottom: "$1 solid $faded",
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
        borderColor: "$secondary",
      },
    },
  },
});

interface NavLinkProps {
  children: React.ReactNode;
  url: string;
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
        >
          {children}
        </A>
      ) : (
        <Link href={url} passHref={true}>
          <A decoration={decoration} margin={margin} state={state}>
            {children}
          </A>
        </Link>
      )}
    </>
  );
}
