import { Grid, GridChild, Heading, P, Small, Figure } from "designSystem";
import type { ReactElement } from "react";
import type { Project as ProjectType } from "services/contentful.types";
import Markdown from "./Markdown";
import ResponsiveImage from "./ResponsiveImage";

export default function Project({ data }: { data: ProjectType }): ReactElement {
  return (
    <Grid as="article">
      <GridChild column="fullWidth" as={Figure}>
        <ResponsiveImage image={data.image} />
      </GridChild>
      <GridChild
        column={{ initial: "fullWidth", bp2: "center", bp3: "$1" }}
        as="header"
      >
        <Heading as="h3" margin="tiny" size="small">
          {data.title}
        </Heading>
        <P lineHeight="crushed" margin="none">
          <Small>{data.blurb}</Small>
        </P>
      </GridChild>
      <GridChild
        column={{ initial: "fullWidth", bp2: "threeQuarters", bp3: "center" }}
        as="section"
      >
        <Markdown source={data.descriptionMarkdown} unwrapped />
      </GridChild>
    </Grid>
  );
}
