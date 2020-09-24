import Link from "next/link";
import { styled } from "tokens";
import { ReactElement } from "react";

const A = styled("a", {
  color: "$primary",
  fontFamily: "$mono",
  fontSize: "$3",
  textDecoration: "none",
  cursor: "pointer",

  variants: {
    appearance: {
      plain: {},
      underline: {
        borderBottom: "$1 solid $primary",
      },
    },
  },
});

interface NavLinkProps {
  children: React.ReactNode;
  url: string;
  plain?: boolean;
}

export default function NavLink({
  children,
  url,
  plain,
}: NavLinkProps): ReactElement {
  const external =
    url.startsWith("http") || url.startsWith("mailto") || url.startsWith("#");
  return (
    <>
      {external ? (
        <A
          href={url}
          appearance={plain ? "plain" : "underline"}
          target="_blank"
          rel="noreferrer"
        >
          {children}
        </A>
      ) : (
        <Link href={url}>
          <A appearance={plain ? "plain" : "underline"}>{children}</A>
        </Link>
      )}
    </>
  );
}
