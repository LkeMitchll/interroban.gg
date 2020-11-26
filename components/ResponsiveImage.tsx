import type { TCssWithBreakpoints } from "@stitches/react";
import { ImageSizes } from "helpers/image";
import Image from "next/image";
import type { ReactElement } from "react";
import type { Asset } from "services/contentful.types";
import { css, styled } from "stitches";

const Wrapper = styled("div", { marginBottom: "$1" });

export default function ResponsiveImage({
  image,
  styles,
  sizes,
}: {
  image: Asset;
  styles?: TCssWithBreakpoints<any>;
  sizes?: string;
  priority?: boolean;
}): ReactElement {
  const imageStyle = css({
    backgroundColor: "$faded",
    borderRadius: "$image",
  });

  return (
    <Wrapper css={styles}>
      <Image
        src={`https:${image.url}`}
        width={image.width}
        height={image.height}
        sizes={sizes ? sizes : ImageSizes.fullWidth}
        layout="responsive"
        alt={image.desc}
        className={imageStyle.toString()}
      />
    </Wrapper>
  );
}
