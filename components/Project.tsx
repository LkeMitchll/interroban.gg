import { Heading, P, Small } from "designSystem";
import type { ReactElement } from "react";
import type { Project as ProjectType } from "services/contentful.types";
import { styled } from "stitches";
import ResponsiveImage from "./ResponsiveImage";
import RichText from "./RichText";

const Container = styled("div", {
  display: "grid",
  gridColumnGap: "$2",
  gridRowGap: "$1",
  marginBottom: "$2",

  ":last-of-type": {
    marginBottom: "$0",
  },

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

const Column = styled("div", {
  marginTop: "$0",

  bp2: {
    marginTop: "$1",
  },
});

export default function Project({ data }: { data: ProjectType }): ReactElement {
  return (
    <Container layout={{ initial: "vertical", bp2: "horizontal" }}>
      <ResponsiveImage image={data.image} styles={{ gridArea: "image" }} />
      <Column>
        <Heading as="h3" margin="tiny" size="small">
          {data.title}
        </Heading>
        <P lineHeight="crushed" margin="none">
          <Small>{data.blurb}</Small>
        </P>
      </Column>
      <Column>
        <RichText source={data.content} unwrapped />
      </Column>
    </Container>
  );
}
