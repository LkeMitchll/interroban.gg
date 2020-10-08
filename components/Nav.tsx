import { styled } from "tokens";
import { NavLink } from "components";
import { ReactElement } from "react";
import { TCssWithBreakpoints } from "@stitches/react";
import { useRouter } from "next/router";

const List = styled("ul", {
  display: "flex",
  listStyle: "none",
  marginBottom: "$0",
  marginTop: "$0",
  padding: "$0",

  variants: {
    layout: {
      vertical: {
        marginTop: "$1",
        flexDirection: "column",
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
  css?: TCssWithBreakpoints<any>;
  layout?: any;
}): ReactElement {
  const currentPage = useRouter().asPath;

  return (
    <List css={css} layout={layout}>
      <Item>
        <NavLink url="/about" active={currentPage == "/about"}>
          About
        </NavLink>
      </Item>
      <Item>
        <NavLink url="/journal" active={currentPage == "/journal"}>
          Journal
        </NavLink>
      </Item>
      <Item>
        <NavLink url="/bookmarks" active={currentPage == "/bookmarks"}>
          Bookmarks
        </NavLink>
      </Item>
    </List>
  );
}
