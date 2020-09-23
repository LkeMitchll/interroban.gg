import { styled } from "tokens";
import { ReactElement } from "react";
import { TCssWithBreakpoints } from "@stitches/react";

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
  css?: TCssWithBreakpoints<any>;
}): ReactElement {
  return <Img src={src} alt={alt} css={css} />;
}
