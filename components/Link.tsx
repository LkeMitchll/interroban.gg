import { styled } from "./stitches";
import { ReactElement } from "react";

const A = styled("a", {
  color: "$primary",
  fontFamily: "$mono",
  fontSize: "$3",
  borderBottom: "1px solid $primary",
  textDecoration: "none",
});

interface LinkProps {
  children: React.ReactNode;
  url: string;
}

export default function Link({ children, url }: LinkProps): ReactElement {
  return <A href={url}>{children}</A>;
}
