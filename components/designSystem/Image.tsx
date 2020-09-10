import { styled } from "tokens";
import { ReactElement } from "react";

const Img = styled("img", {
  width: "100%",
  marginBottom: "$1",
  borderRadius: "2px",
});

export default function Image({
  src,
  alt,
  css,
}: {
  src: string;
  alt: string;
  css: Record<string, string>;
}): ReactElement {
  return <Img src={src} alt={alt} css={css} />;
}
