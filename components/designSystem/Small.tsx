import { styled } from "stitches";

const Small = styled("small", {
  fontFamily: "$serif",
  fontSize: "$3",
  color: "$secondary",

  variants: {
    display: {
      block: {
        display: "block",
      },
    },
    margin: {
      none: {
        marginBottom: "$0",
      },
      small: {
        marginBottom: "$1",
      },
    },
  },

  ["> a"]: {
    color: "$primary",
  },
});

export default Small;
