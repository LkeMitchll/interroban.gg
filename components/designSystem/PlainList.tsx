import { styled } from "stitches";

const PlainList = styled("ul", {
  padding: "$0",
  margin: "$0",
  listStyle: "none",

  variants: {
    lineHeight: {
      relaxed: {
        lineHeight: "$relaxed",
      },
    },
  },
});

export default PlainList;
