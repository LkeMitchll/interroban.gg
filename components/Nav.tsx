import { styled } from "./stitches";
import { ReactElement } from "react";
import { Link } from ".";

const List = styled("ul", {
  display: "flex",
  alignItems: "flex-end",
  listStyle: "none",
  marginBottom: "$0",
  padding: "0",

  variants: {
    layout: {
      tiny: {
        flexDirection: "column",
      },
      small: {
        flexDirection: "row",
      },
    },
  },
});

const Item = styled("li", {
  marginRight: "$2",
});

export default function Nav({
  css,
}: {
  css: Record<string, string>;
}): ReactElement {
  return (
    <List layout={{ initial: "tiny", bp1: "small" }} css={css}>
      <Item>
        <Link url="#">About</Link>
      </Item>
      <Item>
        <Link url="#">Work</Link>
      </Item>
      <Item>
        <Link url="#">Bookmarks</Link>
      </Item>
    </List>
  );
}
