import { styled } from "tokens";
import { ReactElement } from "react";

const A = styled("a", {
  color: "$primary",
  fontFamily: "$mono",
  fontSize: "$3",
  textDecoration: "none",

  variants: {
    appearance: {
      plain: {},
      underline: {
        borderBottom: "1px solid $primary",
      },
    },
  },
});

interface LinkProps {
  children: React.ReactNode;
  url: string;
  plain?: boolean;
}

export default function Link({
  children,
  url,
  plain,
}: LinkProps): ReactElement {
  return (
    <A href={url} appearance={plain ? "plain" : "underline"}>
      {children}
    </A>
  );
}
