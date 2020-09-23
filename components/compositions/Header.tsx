import { styled } from "tokens";
import { Logo, Nav } from "components";
import { ReactElement } from "react";

const Container = styled("nav", {
  display: "grid",
  gridGap: "$2",

  variants: {
    layout: {
      tiny: {
        gridTemplate: `"a a a b" auto / 1fr 1fr 1fr 1fr`,
        marginTop: "$2",
      },
      small: {
        gridTemplate: `"a a b b" auto / 1fr 1fr 1fr 1fr`,
        marginTop: "$3",
        marginBottom: "$2",
      },
    },
  },
});

export default function Header(): ReactElement {
  return (
    <Container layout={{ initial: "tiny", bp1: "small" }}>
      <Logo css={{ gridArea: "a" }} />
      <Nav
        layout={{ initial: "verticalRTL", bp1: "horizontal" }}
        css={{ gridArea: "b" }}
      />
    </Container>
  );
}
