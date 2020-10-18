import { styled } from "stitches";

const SecondaryText = styled("p", {
  fontFamily: "$serif",
  fontSize: "$1",
  fontWeight: "$normal",
  color: "$secondary",
  fontStyle: "italic",
  margin: "$0",

  variants: {
    margin: {
      medium: {
        marginBottom: "$2",
      },
    },
  },
});

export default SecondaryText;
