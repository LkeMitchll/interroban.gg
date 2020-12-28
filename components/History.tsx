import { ListItem } from "components";
import ResponsiveImage from "components/ResponsiveImage";
import {
  Grid,
  GridChild,
  Heading,
  P,
  PlainList,
  Subtitle,
  Figure,
} from "designSystem";
import { ImageSizes } from "helpers/image";
import type { ReactElement } from "react";
import type { Asset, Job, List } from "services/contentful.types";
import { styled } from "stitches";
import clientsData from "data/clients.json";
import skillsData from "data/skills.json";

interface HistoryProps {
  experience: List;
  headshot: Asset;
}

const Item = styled("li", {
  fontFamily: "$serif",
  fontsize: "$1",
});

export default function History({
  experience,
  headshot,
}: HistoryProps): ReactElement {
  return (
    <Grid as="section">
      <GridChild
        as="header"
        column={{ initial: "fullWidth", bp2: "threeQuarters", bp3: "center" }}
      >
        <Heading as="h3" size="small">
          Career
        </Heading>
        <P>
          I&apos;ve been a designer for (almost) 10 years, gaining experience
          working with clients of all sizes, spanning many industries. If you
          think we could work together, please get in touch.
        </P>
      </GridChild>
      <GridChild as={Figure} column={{ initial: "firstHalf", bp2: "$1" }}>
        <ResponsiveImage image={headshot} sizes={ImageSizes.quarter} />
      </GridChild>
      <GridChild
        column={{ initial: "fullWidth", bp1: "secondHalf", bp2: "$2" }}
      >
        <Subtitle as="h4" margin="small">
          {experience.title}
        </Subtitle>
        <PlainList>
          {experience.items.map((item: Job) => (
            <ListItem
              key={item.id}
              top={item.period ? item.period : null}
              title={item.title}
              subtitle={item.company ? item.company : null}
            />
          ))}
        </PlainList>
      </GridChild>
      <GridChild column={{ initial: "fullWidth", bp1: "firstHalf", bp2: "$3" }}>
        <Subtitle as="h4" margin="small">
          Select Clients
        </Subtitle>
        <PlainList lineHeight="relaxed">
          {clientsData.clients.map((client: string, i: number) => (
            <Item key={i}>{client}</Item>
          ))}
        </PlainList>
      </GridChild>
      <GridChild
        column={{ initial: "fullWidth", bp1: "secondHalf", bp2: "$4" }}
      >
        <Subtitle as="h4" margin="small">
          Skills
        </Subtitle>
        <PlainList lineHeight="relaxed">
          {skillsData.skills.map((skill: string, i: number) => (
            <Item key={i}>{skill}</Item>
          ))}
        </PlainList>
      </GridChild>
    </Grid>
  );
}
