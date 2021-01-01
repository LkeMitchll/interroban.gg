import type { ReactElement } from "react";
import { Grid, GridChild } from "./designSystem";

interface SplitterProps {
  col1: ReactElement;
  col2: ReactElement;
  reversedOnMobile?: boolean;
}

export default function Splitter({
  col1,
  col2,
  reversedOnMobile,
}: SplitterProps): ReactElement {
  return (
    <Grid as="article" marginBottom="$3" gap="large">
      <GridChild
        as="section"
        column={{ initial: "fullWidth", bp2: "firstHalf" }}
        row={{ initial: reversedOnMobile ? "$2" : "$auto", bp2: "$auto" }}
      >
        {col1}
      </GridChild>
      <GridChild
        as="section"
        column={{ initial: "fullWidth", bp2: "secondHalf" }}
        row="$auto"
      >
        {col2}
      </GridChild>
    </Grid>
  );
}
