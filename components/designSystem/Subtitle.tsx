import { ReactElement } from "react";
import { styled } from "tokens";
import { TCssWithBreakpoints } from "@stitches/react";

const Tag = styled("h2", {
  color: "$primary",
  fontSize: "$1",
  fontFamily: "$serif",
  fontWeight: "$semi",
  marginTop: "$0",
  marginBottom: "$0",
});

interface SubtitleProps {
  children: React.ReactNode;
  level?: keyof JSX.IntrinsicElements;
  css?: TCssWithBreakpoints<any>;
}

export default function Subtitle({
  children,
  level,
  css,
}: SubtitleProps): ReactElement {
  return (
    <Tag css={css} as={level}>
      {children}
    </Tag>
  );
}
