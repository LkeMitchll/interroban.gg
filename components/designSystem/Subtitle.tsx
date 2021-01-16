import { styled } from "stitches";

const Subtitle = styled("h2", {
  color: "$primary",
  fontSize: "$1",
  fontFamily: "$serif",
  fontWeight: "$semi",
  marginTop: "$0",
  lineHeight: "$crushed",

  variants: {
    margin: {
      none: {
        marginBottom: "$0",
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

export default Subtitle;
