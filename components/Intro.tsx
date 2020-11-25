import { RichText, Title } from "components";
import type { ReactElement } from "react";
import type { Page } from "services/contentful.types";
import { styled } from "stitches";

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
      <RichText source={content.description} unwrapped />
    </Container>
  );
}
