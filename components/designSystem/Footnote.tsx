import { styled } from "tokens";

const Footnote = styled("aside", {
  variants: {
    position: {
      aside: {
        gridArea: "f",
        position: "absolute",
      },
      below: {
        gridColumn: "1 / 3",
        gridRow: "2",
        marginBottom: "$2",
      },
    },
  },
});

export default Footnote;
