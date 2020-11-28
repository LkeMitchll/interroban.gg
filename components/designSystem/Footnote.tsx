import { styled } from "stitches";

const Footnote = styled("figure", {
  gridRow: "auto",
  margin: "$0",

  variants: {
    position: {
      aside: {},
      below: {
        gridColumn: "1 / 3",
        marginBottom: "$2",
        position: "static",
      },
      hero: {
        marginTop: "auto",
        marginBottom: "$1",
      },
    },
  },
});

export default Footnote;
