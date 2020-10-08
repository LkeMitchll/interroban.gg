import { styled } from "components/stitches";

export const Table = styled("table", {
  fontFamily: "$mono",
  fontSize: "$3",
  borderCollapse: "collapse",
  padding: "$0",
  height: "min-content",
  width: "100%",
  marginBottom: "$_5",
});

export const TableRow = styled("tr", {
  borderBottom: "$1 solid $faded",
});

export const TableCell = styled("td", {
  padding: "$_25 $0",
  lineHeight: "$crushed",

  variants: {
    appearance: {
      default: {
        fontStyle: "normal",
      },
      alternative: {
        fontStyle: "italic",
      },
    },
  },
});
