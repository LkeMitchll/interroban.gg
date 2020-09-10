import { styled } from "tokens";
import { ReactElement } from "react";

interface HeadingProps {
  children: React.ReactNode;
  level?: keyof JSX.IntrinsicElements;
  css?: Record<string, string>;
}

const Tag = styled("h1", {
  color: "$primary",
  fontSize: "$1",
  fontFamily: "$sans",
  fontWeight: "$semi",
  lineHeight: "$heading",
  marginTop: "$0",
  marginBottom: "$0",
});

export default function Heading({
  children,
  level,
  css,
}: HeadingProps): ReactElement {
  return (
    <Tag css={css} as={level}>
      {children}
    </Tag>
  );
}
