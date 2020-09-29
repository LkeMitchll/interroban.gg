import { styled } from "tokens";
import { ReactElement } from "react";
import { TCssWithBreakpoints } from "@stitches/react";

interface HeadingProps {
  children: React.ReactNode;
  level?: keyof JSX.IntrinsicElements;
  css?: TCssWithBreakpoints<any>;
  small?: boolean;
}

const Tag = styled("h1", {
  color: "$primary",
  fontFamily: "$sans",
  fontWeight: "$semi",
  lineHeight: "$heading",
  marginTop: "$0",
  marginBottom: "$1",

  variants: {
    size: {
      large: {
        fontSize: "$2",
      },
      small: {
        fontSize: "$1",
      },
    },
  },
});

export default function Heading({
  children,
  level,
  css,
  small,
}: HeadingProps): ReactElement {
  return (
    <Tag css={css} as={level} size={{ initial: small ? "small" : "large" }}>
      {children}
    </Tag>
  );
}
