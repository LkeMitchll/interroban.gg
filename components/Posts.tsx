import { ArrowLink, ListItem } from "components";
import { Heading, PlainList } from "designSystem";
import { formattedDate } from "helpers/date";
import type { ReactElement } from "react";
import type { BlogPostPreview } from "services/contentful.types";

export default function Posts({
  posts,
  title,
  as,
  size,
}: {
  posts: BlogPostPreview[];
  title: string;
  as?: keyof JSX.IntrinsicElements;
  size?: "small" | "large";
}): ReactElement {
  return (
    <>
      <Heading as={as ? as : "h3"} margin="medium" size={size ? size : "large"}>
        {title}
      </Heading>
      <PlainList>
        {posts.map((post) => (
          <ListItem
            key={post.id}
            title={post.title}
            subtitle={formattedDate(post.date, {
              month: "long",
              year: "numeric",
            })}
            url={`/post/${post.slug}`}
          />
        ))}
      </PlainList>
      <ArrowLink url="/journal" text="See all" />
    </>
  );
}
