import { styled } from "tokens";
import { Subtitle, PlainList } from "designSystem";
import { Roundup, Bookmark as Item } from "components";
import { ReactElement } from "react";
import { Roundup as RoundupType, Bookmark } from "services/contentful.types";

const Container = styled("section", {
  display: "grid",
  gridGap: "$2",

  variants: {
    layout: {
      vertical: { gridTemplateColumns: "1fr" },
      horizontal: {
        gridTemplateColumns: "1fr 1fr",
      },
    },
  },
});

const Column = styled("div", {
  variants: {
    position: {
      first: {
        gridRow: "1",
        bp2: {
          gridRow: "1",
          gridColumn: "1",
        },
      },
      second: {
        gridRow: "2",
        bp2: {
          gridRow: "1",
          gridColumn: "2",
        },
      },
    },
  },
});

export default function List({
  posts,
  roundup,
}: {
  posts: Array<Bookmark>;
  roundup: RoundupType;
}): ReactElement {
  return (
    <Container layout={{ initial: "vertical", bp2: "horizontal" }}>
      <Column position={{ initial: "second", bp2: "first" }}>
        <Subtitle css={{ marginBottom: "$2" }}>All Bookmarks</Subtitle>
        <PlainList>
          {posts.map((entry) => (
            <Item key={entry.id} data={entry} />
          ))}
        </PlainList>
      </Column>
      <Column position={{ initial: "first", bp2: "second" }}>
        <Subtitle css={{ marginBottom: "$2" }}>
          Favourites - {roundup.title}
        </Subtitle>
        <Roundup data={roundup} />
      </Column>
    </Container>
  );
}
