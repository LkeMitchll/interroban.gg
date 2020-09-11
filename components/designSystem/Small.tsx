import { ReactElement } from "react";
import { styled } from "tokens";

const Wrapper = styled("p", {
  margin: 0,
});

const Tag = styled("small", {
  fontFamily: "$serif",
  fontSize: "$3",
  color: "$secondary",
});

export default function Small({
  children,
  css,
}: {
  children: React.ReactNode;
  css?: Record<string, string>;
}): ReactElement {
  return (
    <Wrapper>
      <Tag css={css}>{children}</Tag>
    </Wrapper>
  );
}
