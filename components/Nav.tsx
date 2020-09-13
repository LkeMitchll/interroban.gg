import { styled } from "tokens";
import { Link } from "components";
import { ReactElement } from "react";

const List = styled("ul", {
  display: "flex",
  listStyle: "none",
  marginBottom: "$0",
  padding: "0",

  variants: {
    layout: {
      vertical: {
        flexDirection: "column",
      },
      verticalRTL: {
        flexDirection: "column",
        alignItems: "flex-end",
        marginRight: "-$2",
      },
      horizontal: {
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
  layout,
}: {
  css?: Record<string, string>;
  layout?: Record<string, string>;
}): ReactElement {
  return (
    <List layout={layout} css={css}>
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
