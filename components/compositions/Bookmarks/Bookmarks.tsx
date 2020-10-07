import { PlainList, Heading } from "designSystem";
import { Bookmark as Item } from "components";
import { ReactElement } from "react";
import { Bookmark } from "services/contentful.types";

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
          <Item key={entry.id} data={entry} />
        ))}
      </PlainList>
    </>
  );
}
