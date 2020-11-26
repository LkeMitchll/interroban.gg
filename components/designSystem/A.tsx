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
    appearance: {
      underline: {
        textDecoration: "underline",
      },
      plain: {
        textDecoration: "none",
      },
    },
  },
});

export default A;
