import { styled } from "./stitches";

const Button = styled("button", {
  color: "$primary",
  fontFamily: "$mono",
  fontSize: "$3",
  border: "$1 solid $primary",
  padding: "$_5 $1",
  margin: "$0",
  overflow: "visible",
  background: "transparent",
  WebkitAppearance: "none",
  transition: "background-color 0.5s ease, color 0.5s ease",

  ":hover": {
    cursor: "pointer",
    backgroundColor: "$primary",
    color: "$bg",
  },

  ":disabled": {
    color: "$faded",
    backgroundColor: "$bg",
    cursor: "not-allowed",
  },
});

export default Button;
