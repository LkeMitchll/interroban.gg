import { TCssWithBreakpoints } from "@stitches/react";
import { ReactElement } from "react";
import { styled } from "tokens";

const Tag = styled("h2", {
  color: "$primary",
  fontSize: "$1",
  fontFamily: "$serif",
  fontWeight: "$semi",
  marginTop: "$0",
  lineHeight: "$crushed",

  variants: {
    margin: {
      none: {
        marginBottom: "$0",
      },
      small: {
        marginBottom: "$1",
      },
    },
  },
});

interface SubtitleProps {
  children: React.ReactNode;
  level?: keyof JSX.IntrinsicElements;
  margin?: "none" | "small";
  css?: TCssWithBreakpoints<any>;
}

export default function Subtitle({
  children,
  level,
  margin = "none",
  css,
}: SubtitleProps): ReactElement {
  return (
    <Tag margin={margin} as={level} css={css}>
      {children}
    </Tag>
  );
}
