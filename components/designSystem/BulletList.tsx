import { styled } from "stitches";

const BulletList = styled("ul", {
  margin: "$0",
  paddingLeft: "$1",
  fontFamily: "$serif",
  listStyleType: `"—"`,

  " li": {
    paddingLeft: "$1",
  },

  " li p": {
    marginBottom: "$_5",
  },
});

export default BulletList;
