import { ReactElement } from "react";
import { Image } from "designSystem";
import { Asset } from "services/contentful.types";
import { ImageSrc, ImageSizes } from "helpers/image";
import { TCssWithBreakpoints } from "@stitches/react";
import { styled } from "./stitches";

const Wrapper = styled("picture", { display: "block" });

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
      <source
        type="image/webp"
        srcSet={ImageSrc(image, "webp")}
        sizes={sizes ? sizes : ImageSizes.fullWidth}
      />
      <Image
        srcSet={ImageSrc(image, "jpg")}
        sizes={sizes ? sizes : ImageSizes.fullWidth}
        src={image.url}
        alt={image.desc}
        width={image.width}
        height={image.height}
        css={{ gridArea: "image" }}
      />
    </Wrapper>
  );
}
