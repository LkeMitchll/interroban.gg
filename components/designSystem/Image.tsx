import { styled } from "tokens";
import { ReactElement } from "react";
import { TCssWithBreakpoints } from "@stitches/react";

const Img = styled("img", {
  marginBottom: "$1",
  borderRadius: "$image",
  width: "$full",
  height: "auto",
});

export default function Image({
  src,
  alt,
  css,
  width,
  height,
}: {
  src: string;
  alt: string;
  css?: TCssWithBreakpoints<any>;
  width: number;
  height: number;
}): ReactElement {
  return <Img src={src} alt={alt} css={css} width={width} height={height} />;
}
