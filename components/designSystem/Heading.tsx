import { styled } from "stitches";

const Heading = styled("h1", {
  color: "$primary",
  fontFamily: "$sans",
  fontWeight: "$semi",
  lineHeight: "$heading",
  marginTop: "$0",

  variants: {
    size: {
      large: {
        fontSize: "$2",
      },
      small: {
        fontSize: "$1",
      },
    },
    margin: {
      none: {
        marginBottom: "$0",
      },
      tiny: {
        marginBottom: "$_5",
      },
      small: {
        marginBottom: "$1",
      },
      medium: {
        marginBottom: "$2",
      },
    },
  },
});

export default Heading;
