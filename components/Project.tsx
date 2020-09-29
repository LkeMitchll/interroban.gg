import { ReactElement } from "react";
import { styled } from "tokens";
import { Image, Heading, Small } from "designSystem";
import { Project as ProjectType } from "services/contentful.types";
import RichText from "./RichText";

const Container = styled("div", {
  display: "grid",
  gridColumnGap: "$2",
  gridRowGap: "$1",

  variants: {
    layout: {
      vertical: {
        gridTemplate: `
          "image" auto
          "title" auto
          "content" auto / 1fr
        `,
      },
      horizontal: {
        gridTemplate: `
          "image image image" auto
          "title content . " auto / 1fr 2fr 1fr
        `,
      },
    },
  },
});

export default function Project({ data }: { data: ProjectType }): ReactElement {
  return (
    <Container layout={{ initial: "vertical", bp2: "horizontal" }}>
      <Image
        src={`${data.image.url}?w=${data.image.width / 4}&q=70&fm=jpg`}
        alt={data.image.desc}
        width={data.image.width}
        height={data.image.height}
        css={{ gridArea: "image" }}
      />
      <div>
        <Heading css={{ marginBottom: "$_5" }} small>
          {data.title}
        </Heading>
        <Small>{data.blurb}</Small>
      </div>
      <div>
        <RichText source={data.content} unwrapped />
      </div>
    </Container>
  );
}
