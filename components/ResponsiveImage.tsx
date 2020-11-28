import { ImageSizes } from "helpers/image";
import Image from "next/image";
import type { ReactElement } from "react";
import type { Asset } from "services/contentful.types";
import { css } from "stitches";

export default function ResponsiveImage({
  image,
  sizes,
}: {
  image: Asset;
  sizes?: string;
  priority?: boolean;
}): ReactElement {
  const imageStyle = css({
    backgroundColor: "$faded",
    borderRadius: "$image",
  });

  return (
    <Image
      src={`https:${image.url}`}
      width={image.width}
      height={image.height}
      sizes={sizes ? sizes : ImageSizes.fullWidth}
      layout="responsive"
      alt={image.desc}
      className={imageStyle.toString()}
    />
  );
}
