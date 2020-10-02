import { styled } from "tokens";

const LargeText = styled("p", {
  fontFamily: "$sans",
  fontWeight: "$semi",
  lineHeight: "$default",
  margin: "$0",
  fontFeatureSettings: `"ss01" off`,
});

export default LargeText;
