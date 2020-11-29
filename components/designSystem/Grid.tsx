import { styled } from "./stitches";

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridColumnGap: "$2",

  variants: {
    marginTop: {
      $3: { marginTop: "$3" },
    },
    marginBottom: {
      $1: { marginBottom: "$1" },
      $2: { marginBottom: "$2" },
      $3: { marginBottom: "$3" },
    },
    gap: {
      default: {
        gridRowGap: "$2",
      },
      small: {
        gridRowGap: "$1",
      },
      large: {
        gridRowGap: "$3",
      },
    },
  },
});

Grid.defaultProps = {
  gap: "default",
  marginBottom: "$2",
};

export default Grid;
