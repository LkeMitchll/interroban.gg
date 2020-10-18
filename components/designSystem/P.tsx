import { styled } from "stitches";

const P = styled("p", {
  marginTop: "$0",
  fontFamily: "$serif",
  marginBottom: "$1",
  maxWidth: "$measure",
  fontSize: "$1",
  lineHeight: "$default",

  variants: {
    margin: {
      none: {
        marginBottom: "$0",
      },
      medium: {
        marginBottom: "$2",
      },
    },
    padding: {
      none: { padding: "$0" },
      right: { paddingRight: "$2" },
    },
    lineHeight: {
      relaxed: {
        lineHeight: "$relaxed",
      },
    },
  },
});

export default P;
