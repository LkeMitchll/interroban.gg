import { styled } from "tokens";
import { Markdown, Title } from "components";
import { ReactElement } from "react";
import { Page } from "services/contentful.types";

const Container = styled("section", {
  display: "grid",
  columnGap: "$2",
  marginBottom: "$3",

  variants: {
    layout: {
      horizontal: {
        gridTemplateColumns: "1fr 1fr",
      },
      vertical: {
        gridTemplateColumns: "1fr",
      },
    },
  },
});

export default function About({ content }: { content?: Page }): ReactElement {
  return (
    <Container layout={{ initial: "vertical", bp2: "horizontal" }}>
      <Title title="About Me" link={{ text: "Read more", url: "/about" }} />
      <Markdown source={content.description} />
    </Container>
  );
}
