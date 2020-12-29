import { ArrowLink, ListItem } from "components";
import type { ReactElement } from "react";
import type {
  BlogPostPreview,
  Bookmark,
  ReadingEntry,
} from "services/contentful.types";
import { Heading, PlainList } from "./designSystem";

export interface TextListProps {
  title: string;
  items: Array<BlogPostPreview | Bookmark | ReadingEntry>;
  titleTag?: "h1" | "h2" | "h3";
  titleSize?: "large" | "small";
  link?: Record<"url" | "text", string>;
  externalLinks?: boolean;
}

export default function TextList({
  title,
  items,
  titleTag,
  titleSize,
  link,
  externalLinks,
}: TextListProps): ReactElement {
  return (
    <>
      <Heading as={titleTag} margin="medium" size={titleSize}>
        {title}
      </Heading>
      <PlainList data-cy={`${title} items`}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            url={item.url}
            subtitle={item.subtitle}
            external={externalLinks}
          />
        ))}
      </PlainList>
      {link && <ArrowLink url={link.url} text={link.text} />}
    </>
  );
}
