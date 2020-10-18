import { styled } from "stitches";
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
        <NavLink
          url="/about"
          state={currentPage == "/about" ? "active" : "inactive"}
          decoration="underline"
        >
          About
        </NavLink>
      </Item>
      <Item>
        <NavLink
          url="/journal"
          state={currentPage == "/journal" ? "active" : "inactive"}
          decoration="underline"
        >
          Journal
        </NavLink>
      </Item>
      <Item>
        <NavLink
          url="/bookmarks"
          state={currentPage == "/bookmarks" ? "active" : "inactive"}
          decoration="underline"
        >
          Bookmarks
        </NavLink>
      </Item>
    </List>
  );
}
