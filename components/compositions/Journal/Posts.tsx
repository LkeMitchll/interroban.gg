import { ListItem } from "components";
import { Heading, PlainList } from "designSystem";
import { ReactElement } from "react";
import { BlogPost } from "services/contentful.types";
import { formattedDate } from "helpers/date";

export default function Posts({
  posts,
  title,
  as,
  size,
}: {
  posts: BlogPost[];
  title: string;
  as?: keyof JSX.IntrinsicElements;
  size?: "small" | "large";
}): ReactElement {
  return (
    <div>
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
            url={`/post/[slug]`}
            urlAs={`/post/${post.slug}`}
          />
        ))}
      </PlainList>
    </div>
  );
}
