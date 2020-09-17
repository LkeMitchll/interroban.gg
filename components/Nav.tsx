import { styled } from "tokens";
import { NavLink } from "components";
import { ReactElement } from "react";

const List = styled("ul", {
  display: "flex",
  listStyle: "none",
  marginBottom: "$0",
  padding: "$0",

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
  compact,
}: {
  css?: Record<string, string>;
  layout?: Record<string, string>;
  compact?: boolean;
}): ReactElement {
  return (
    <List layout={layout} css={css}>
      {!compact ? (
        <Item>
          <NavLink url="/about">About</NavLink>
        </Item>
      ) : null}
      <Item>
        <NavLink url="/work">Work</NavLink>
      </Item>
      <Item>
        <NavLink url="/journal">Journal</NavLink>
      </Item>
      <Item>
        <NavLink url="/bookmarks">Bookmarks</NavLink>
      </Item>
    </List>
  );
}
