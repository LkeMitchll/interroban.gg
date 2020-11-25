import { Heading, PlainList } from "components/designSystem";
import ListItem from "components/ListItem";
import type { ReactElement } from "react";
import type { ReadingEntry } from "services/contentful.types";

export default function Reading({
  title,
  items,
}: {
  title: string;
  items: ReadingEntry[];
}): ReactElement {
  return (
    <div>
      <Heading as="h3" margin="medium" size="small">
        {title}
      </Heading>
      <PlainList>
        {items.map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            url={item.url}
            subtitle={`${item.type} - ${item.author}`}
            external
          />
        ))}
      </PlainList>
    </div>
  );
}
