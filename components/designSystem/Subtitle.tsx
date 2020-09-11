import { ReactElement } from "react";
import { styled } from "tokens";

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
  css?: Record<string, string>;
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
