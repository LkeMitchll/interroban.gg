import { styled } from "./stitches";

const Button = styled("button", {
  color: "$primary",
  fontFamily: "$serif",
  fontSize: "$1",
  textDecoration: "underline",
  border: "none",
  padding: "$0",
  margin: "$0",
  overflow: "visible",
  background: "transparent",
  WebkitAppearance: "none",

  ":hover": {
    cursor: "pointer",
  },

  ":disabled": {
    color: "$faded",
    cursor: "not-allowed",
  },
});

export default Button;
