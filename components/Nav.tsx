import { styled } from "tokens";
import { Link } from "components";
import { ReactElement } from "react";

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
  bp1: {
    marginRight: "$2",
  },
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
