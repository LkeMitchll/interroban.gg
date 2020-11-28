import type { ReactElement } from "react";
import { Grid, GridChild } from "./designSystem";

interface SplitterProps {
  col1: ReactElement;
  col2: ReactElement;
}

export default function Splitter({ col1, col2 }: SplitterProps): ReactElement {
  return (
    <Grid as="article" marginBottom="$3">
      <GridChild
        as="section"
        column={{ initial: "fullWidth", bp2: "firstHalf" }}
      >
        {col1}
      </GridChild>
      <GridChild
        as="section"
        column={{ initial: "fullWidth", bp2: "secondHalf" }}
      >
        {col2}
      </GridChild>
    </Grid>
  );
}
