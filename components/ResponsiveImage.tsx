import { ReactElement } from "react";
import Image from "next/image";
import { Asset } from "services/contentful.types";
import { ImageSizes } from "helpers/image";
import { TCssWithBreakpoints } from "@stitches/react";
import { styled } from "./stitches";

const Wrapper = styled("div", {
  " div": { width: "100% !important" },
});

export default function ResponsiveImage({
  image,
  css,
  sizes,
}: {
  image: Asset;
  css?: TCssWithBreakpoints<any>;
  sizes?: string;
}): ReactElement {
  return (
    <Wrapper css={css}>
      <Image
        src={`https:${image.url}`}
        width={image.width}
        height={image.height}
        sizes={sizes ? sizes : ImageSizes.fullWidth}
        quality="90"
      />
    </Wrapper>
  );
}
