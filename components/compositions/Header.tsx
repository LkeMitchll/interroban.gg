import { styled } from "../stitches";
import { ReactElement } from "react";
import { Logo, Nav } from "../";

const Container = styled("nav", {
  display: "grid",
  marginBottom: "$2",
  marginTop: "$3",
  gridGap: "$2",

  variants: {
    layout: {
      tiny: {
        gridTemplate: `"a a a b" auto / 1fr 1fr 1fr 1fr`,
      },
      small: {
        gridTemplate: `"a a b b" auto / 1fr 1fr 1fr 1fr`,
      },
    },
  },
});

export default function Header(): ReactElement {
  return (
    <Container layout={{ initial: "tiny", bp1: "small" }}>
      <Logo css={{ gridArea: "a" }} />
      <Nav css={{ gridArea: "b" }} />
    </Container>
  );
}
