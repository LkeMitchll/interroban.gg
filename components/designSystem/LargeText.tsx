import { styled } from "stitches";

const LargeText = styled("p", {
  fontFamily: "$sans",
  fontWeight: "$semi",
  lineHeight: "$default",
  margin: "$0",
  fontFeatureSettings: `"ss01" off`,

  variants: {
    margin: {
      medium: {
        marginBottom: "$2",
      },
    },
  },
});

export default LargeText;
