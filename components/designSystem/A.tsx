import { styled } from "stitches";

const A = styled("a", {
  color: "$primary",
  fontFamily: "$serif",
  fontSize: "$1",

  variants: {
    size: {
      small: {
        fontSize: "$3",
      },
    },
  },
});

export default A;
