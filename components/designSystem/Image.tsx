import { styled } from "tokens";

const Image = styled("img", {
  marginBottom: "$1",
  borderRadius: "$image",
  width: "$full",
  height: "auto",

  variants: {
    margin: {
      none: {
        marginBottom: "$0",
      },
    },
    size: {
      tiny: {
        display: "inline-block",
        width: "40px",
        marginBottom: "$0",
        marginRight: "$1",
        marginLeft: "$1",
        verticalAlign: "text-top",
        marginTop: "0.3rem",
      },
    },
  },
});

export default Image;
