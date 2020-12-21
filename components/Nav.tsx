import { NavLink } from "components";
import { useRouter } from "next/router";
import type { ReactElement } from "react";
import { styled } from "stitches";

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
  footerLayout,
}: {
  footerLayout?: boolean;
}): ReactElement {
  const currentPage = useRouter().asPath;

  return (
    <List layout={footerLayout && { initial: "horizontal", bp2: "vertical" }}>
      <Item>
        <NavLink
          url="/about"
          state={currentPage == "/about" ? "active" : "inactive"}
          appearance="underline"
          margin={{ initial: "medium", bp2: "small" }}
        >
          About
        </NavLink>
      </Item>
      <Item>
        <NavLink
          url="/journal"
          state={currentPage == "/journal" ? "active" : "inactive"}
          appearance="underline"
          margin={{ initial: "medium", bp2: "small" }}
        >
          Journal
        </NavLink>
      </Item>
      <Item>
        <NavLink
          url="/bookmarks"
          state={currentPage == "/bookmarks" ? "active" : "inactive"}
          appearance="underline"
          margin={{ initial: "medium", bp2: "small" }}
        >
          Bookmarks
        </NavLink>
      </Item>
    </List>
  );
}
