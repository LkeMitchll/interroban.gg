import { ReactElement } from "react";
import { Heading, PlainList } from "components/designSystem";
import { ReadingEntry } from "services/contentful.types";
import ListItem from "components/ListItem";

export default function Reading({
  title,
  items,
}: {
  title: string;
  items: ReadingEntry[];
}): ReactElement {
  return (
    <div>
      <Heading css={{ marginBottom: "$2" }} small>
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
