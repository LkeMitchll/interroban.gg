import { ReactElement } from "react";
import { styled } from "tokens";
import { Heading, Small } from "designSystem";
import { Asset, Project as ProjectType } from "services/contentful.types";
import RichText from "./RichText";
import ResponsiveImage from "./ResponsiveImage";

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
      <ResponsiveImage
        image={data.image as Asset}
        css={{ gridArea: "image" }}
      />
      <div>
        <Heading as="h3" margin="tiny" size="small">
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
