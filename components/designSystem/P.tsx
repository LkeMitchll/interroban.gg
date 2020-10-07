import { styled } from "tokens";

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
    lineHeight: {
      relaxed: {
        lineHeight: "$relaxed",
      },
    },
  },
});

export default P;
