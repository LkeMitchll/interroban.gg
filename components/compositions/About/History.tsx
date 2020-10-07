import { styled } from "tokens";
import { Asset, List } from "services/contentful.types";
import { ReactElement } from "react";
import { Image, P, PlainList, Heading, Subtitle } from "designSystem";
import { ListItem } from "components";

interface HistoryProps {
  experience: List;
  headshot: Asset;
}

const Container = styled("div", {
  display: "grid",
  gridGap: "$2",
  marginTop: "$3",

  variants: {
    layout: {
      twoCol: {
        gridTemplateColumns: "repeat(2, 1fr)",
      },
      fourCol: {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
    },
  },
});

const Item = styled("li", {
  fontFamily: "$serif",
  fontsize: "$1",
});

const Summary = styled("div", {
  marginBottom: "$2",
  variants: {
    layout: {
      single: {
        gridColumn: "1 / 3",
      },
      full: {
        gridColumn: "2 / 5",
      },
    },
  },
});

export default function History({
  experience,
  headshot,
}: HistoryProps): ReactElement {
  const clients = [
    "DigitalOcean",
    "Steel Warriors",
    "Babylon Health",
    "Deliveroo",
    "Which?",
    "UK Goverment",
    "Koru Kids",
  ];
  const skills = [
    "Art Direction",
    "Product Design",
    "Mentorship",
    "Illustration",
    "UI & UX Development",
    "Project Management",
    "Design Consultancy",
    "Sales Support",
  ];
  return (
    <Container layout={{ initial: "twoCol", bp3: "fourCol" }}>
      <Summary layout={{ initial: "single", bp3: "full" }}>
        <Heading as="h3" size="small">
          Career
        </Heading>
        <P>
          I&apos;ve been a designer for (almost) 10 years, gaining experience
          working with clients of all sizes, spanning many industries. If you
          think we could work together, please get in touch.
        </P>
      </Summary>
      <div>
        <Image
          src={`${headshot.url}?w=${Math.round(headshot.width / 6)}&q=50`}
          alt={headshot.desc}
          width={Math.round(headshot.width / 6)}
          height={Math.round(headshot.height / 6)}
          css={{ width: "80%" }}
        />
      </div>
      <div>
        <Subtitle level="h4" margin="small">
          {experience.title}
        </Subtitle>
        <PlainList>
          {experience.items.map((item) => (
            <ListItem
              key={item.id}
              top={item.period}
              title={item.title}
              subtitle={item.company}
            />
          ))}
        </PlainList>
      </div>
      <div>
        <Subtitle level="h4" margin="small">
          Select Clients
        </Subtitle>
        <PlainList lineHeight="relaxed">
          {clients.map((client, i) => (
            <Item key={i}>{client}</Item>
          ))}
        </PlainList>
      </div>
      <div>
        <Subtitle level="h4" margin="small">
          Skills
        </Subtitle>
        <PlainList lineHeight="relaxed">
          {skills.map((skill, i) => (
            <Item key={i}>{skill}</Item>
          ))}
        </PlainList>
      </div>
    </Container>
  );
}
