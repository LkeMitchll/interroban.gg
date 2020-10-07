import { styled } from "tokens";

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
