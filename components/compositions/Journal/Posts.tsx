import { ListItem } from "components";
import { Heading, PlainList } from "designSystem";
import { ReactElement } from "react";
import { BlogPost } from "services/contentful.types";
import { formattedDate } from "helpers/date";

export default function Posts({
  posts,
  title,
  compact,
}: {
  posts: BlogPost[];
  title: string;
  compact?: boolean;
}): ReactElement {
  return (
    <div>
      <Heading level="h2" css={{ marginBottom: "$2" }} small={compact}>
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
            url={`/post/[slug]`}
            urlAs={`/post/${post.slug}`}
          />
        ))}
      </PlainList>
    </div>
  );
}
