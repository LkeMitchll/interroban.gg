import { styled } from "stitches";

const Footnote = styled("figure", {
  gridRow: "auto",
  margin: "$0",

  variants: {
    position: {
      below: {
        gridColumn: "1 / 3",
        marginBottom: "$2",
        position: "static",
      },
      hero: {
        marginTop: "auto",
        marginBottom: "$1",
        bp2: {
          marginBottom: "$0",
        },
      },
    },
  },
});

export default Footnote;
