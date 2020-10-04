import { styled } from "tokens";
import { Logo, Nav } from "components";
import { ReactElement } from "react";

const Container = styled("nav", {
  display: "grid",
  gridGap: "$2",

  variants: {
    layout: {
      tiny: {
        gridTemplate: `"a a a a" auto "b b b b" auto / 1fr 1fr 1fr 1fr`,
        marginTop: "$2",
      },
      small: {
        gridTemplate: `"a a b b" auto / 1fr 1fr 1fr 1fr`,
        marginTop: "$3",
        marginBottom: "$2",
      },
      minimal: {
        gridTemplate: `"b" auto / 1fr`,
        marginTop: "$3",
        marginBottom: "$2",
      },
    },
  },
});

export default function Header({
  layout,
}: {
  layout?: Record<any, any>;
}): ReactElement {
  return (
    <Container layout={layout ? layout : { initial: "tiny", bp1: "small" }}>
      {layout?.initial == "minimal" ? null : <Logo css={{ gridArea: "a" }} />}
      <Nav
        layout={{
          initial: layout?.initial == "minimal" ? "centered" : "horizontal",
          bp1: layout?.initial == "minimal" ? "centered" : "horizontal",
        }}
        css={{ gridArea: "b" }}
      />
    </Container>
  );
}
