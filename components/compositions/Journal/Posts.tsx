import { ListItem } from "components";
import { Subtitle, PlainList } from "designSystem";
import { ReactElement } from "react";
import { BlogPost } from "services/contentful.types";
import { formattedDate } from "helpers/date";

export default function Posts({
  posts,
}: {
  posts: Array<BlogPost>;
}): ReactElement {
  return (
    <div>
      <Subtitle css={{ marginBottom: "$2" }}>Posts</Subtitle>
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
