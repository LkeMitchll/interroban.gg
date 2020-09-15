import { styled } from "tokens";
import { ReactElement } from "react";

const Img = styled("img", {
  width: "$full",
  marginBottom: "$1",
  borderRadius: "$image",
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
