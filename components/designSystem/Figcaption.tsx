import Small from "./Small";
import { styled } from "./stitches";

const Figcaption = styled(Small, {
  paddingTop: "$1",
});

Figcaption.defaultProps = {
  as: "figcaption",
};

export default Figcaption;
