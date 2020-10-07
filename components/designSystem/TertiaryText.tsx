import { styled } from "tokens";

const TertiaryText = styled("p", {
  fontFamily: "$mono",
  fontSize: "$3",
  marginTop: "$0",
  marginBottom: "$1",

  variants: {
    margin: {
      none: {
        marginBottom: "$0",
      },
    },
  },
});

export default TertiaryText;
