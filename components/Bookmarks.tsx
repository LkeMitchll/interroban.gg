import { ArrowLink, ListItem } from "components";
import { Heading, PlainList } from "designSystem";
import type { ReactElement } from "react";
import type { Bookmark } from "services/contentful.types";

export default function List({
  posts,
  title,
  as,
  size,
}: {
  posts: Bookmark[];
  title: string;
  compact?: boolean;
  as?: keyof JSX.IntrinsicElements;
  size?: "small" | "large";
}): ReactElement {
  return (
    <>
      <Heading as={as ? as : "h3"} size={size ? size : "large"} margin="medium">
        {title}
      </Heading>
      <PlainList>
        {posts.map((entry) => (
          <ListItem
            key={entry.id}
            title={entry.title}
            url={entry.url}
            subtitle={`${entry.tag}`}
            external
          />
        ))}
      </PlainList>
      <ArrowLink url="/bookmarks" text="See all" />
    </>
  );
}
