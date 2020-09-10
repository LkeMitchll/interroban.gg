import { styled } from "../../stitches";
import { ReactElement } from "react";
import { Image, Small } from "../../designSystem";
import { Title, Markdown } from "../../";
import { Page } from "../../../services/contentful.types";

const Container = styled("section", {
  display: "grid",
  columnGap: "$2",
  marginBottom: "$3",

  variants: {
    layout: {
      tiny: {
        gridTemplate: `
          "a a a" auto
          "b b b" auto
          "c c c" auto / 1fr 1fr 1fr;
        `,
      },
      small: {
        gridTemplate: `
          "a a a a" auto
          ". b b b" auto
          ". c c c" auto / 1fr 1fr 1fr 1fr;
        `,
      },
      medium: {
        gridTemplate: `
          ". a a a" auto
          ". b b b" auto
          ". c c c" auto / 1fr 1fr 1fr 1fr;
        `,
      },
      large: {
        gridTemplate: `
          ". a a a" auto
          ". b c c" auto / 1fr 1fr 1fr 1fr;
        `,
      },
    },
  },
});

const Content = styled("div", {
  gridArea: "c",
  marginTop: "$1",
});

export default function About({ content }: { content?: Page }): ReactElement {
  const imageURL =
    "https://images.unsplash.com/photo-1598965897289-4768a8799acc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80";
  return (
    <Container
      layout={{ initial: "tiny", bp1: "small", bp2: "medium", bp3: "large" }}
    >
      <Image src={imageURL} alt="A nice photo" css={{ gridArea: "a" }} />
      <Title
        title="About Me"
        sectionNumber="1.1"
        link={{ url: "#", text: "Read more" }}
        css={{ gridArea: "b" }}
      />
      <Content>
        <Markdown source={content.description} />
        <Small>
          Product Designer
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          UI & UX Developer
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          Mentor
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          Illustrator
        </Small>
      </Content>
    </Container>
  );
}
