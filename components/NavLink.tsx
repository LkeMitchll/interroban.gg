import { StitchesProps } from "@stitches/react";
import Link from "next/link";
import { A } from "designSystem";
import type { ReactElement } from "react";
import { styled } from "stitches";

type NavLinkVariants = StitchesProps<typeof Anchor>;

const Anchor = styled(A, {
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
    appearance: {
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

type NavLinkProps = {
  children: React.ReactNode;
  url: string;
} & NavLinkVariants;

export default function NavLink({
  children,
  url,
  state,
  appearance,
  margin,
}: NavLinkProps): ReactElement {
  const external =
    url.startsWith("http") || url.startsWith("mailto") || url.startsWith("#");
  return (
    <>
      {external ? (
        <Anchor
          href={url}
          appearance={appearance}
          margin={margin}
          state={state}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </Anchor>
      ) : (
        <Link href={url} passHref={true}>
          <Anchor appearance={appearance} margin={margin} state={state}>
            {children}
          </Anchor>
        </Link>
      )}
    </>
  );
}
