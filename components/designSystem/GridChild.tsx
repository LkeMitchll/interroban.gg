import { StitchesVariants, StitchesProps } from "@stitches/react";
import { styled } from "./stitches";

export type GridChildVariants = StitchesVariants<typeof GridChild>;
export type GridChildProps = StitchesProps<typeof GridChild>;

const GridChild = styled("div", {
  variants: {
    column: {
      auto: { gridColumn: "auto" },
      $1: { gridColumn: "1" },
      $2: { gridColumn: "2" },
      $3: { gridColumn: "3" },
      $4: { gridColumn: "4" },
      firstHalf: { gridColumn: "1 / span 2" },
      secondHalf: { gridColumn: "3 / span 2" },
      fullWidth: { gridColumn: "1 / span 4" },
      threeQuarters: { gridColumn: "2 / span 3" },
      center: { gridColumn: "2 / span 2" },
    },
    row: {
      $auto: { gridRow: "auto" },
      $1: { gridRow: "1" },
      $2: { gridRow: "2" },
      $3: { gridRow: "3" },
      $4: { gridRow: "4" },
      spanTwo: { gridRow: "1 / span 2" },
    },
    position: {
      bottom: {
        marginTop: "auto",
      },
    },
  },
});

export default GridChild;
