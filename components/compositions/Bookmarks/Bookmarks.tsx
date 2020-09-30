import { PlainList, Heading } from "designSystem";
import { Bookmark as Item } from "components";
import { ReactElement } from "react";
import { Bookmark } from "services/contentful.types";

export default function List({
  posts,
  title,
  compact,
}: {
  posts: Bookmark[];
  title: string;
  compact?: boolean;
}): ReactElement {
  return (
    <>
      <Heading css={{ marginBottom: "$2" }} small={compact}>
        {title}
      </Heading>
      <PlainList
        css={{
          display: "grid",
          gridColumnGap: "$2",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {posts.map((entry) => (
          <Item key={entry.id} data={entry} />
        ))}
      </PlainList>
    </>
  );
}
