import { ReactElement } from "react";
import Image from "next/image";
import { Asset } from "services/contentful.types";
import { ImageSizes } from "helpers/image";
import { TCssWithBreakpoints } from "@stitches/react";
import { styled, css } from "./stitches";

const Wrapper = styled("div", {});

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
