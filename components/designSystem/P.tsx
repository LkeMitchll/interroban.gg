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
      0: {
        marginBottom: "$0",
      },
    },
  },
});

export default P;
