import { Logo, Nav } from "components";
import type { ReactElement } from "react";
import { Grid, GridChild } from "./designSystem";

export default function SiteHeader(): ReactElement {
  return (
    <Grid as="nav" marginTop="$3">
      <GridChild column={{ initial: "fullWidth", bp2: "firstHalf" }}>
        <Logo />
      </GridChild>
      <GridChild column={{ initial: "fullWidth", bp2: "secondHalf" }}>
        <Nav />
      </GridChild>
    </Grid>
  );
}
