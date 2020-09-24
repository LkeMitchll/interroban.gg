import { ReactElement } from "react";
import { Subtitle, PlainList } from "components/designSystem";
import { ReadingEntry } from "services/contentful.types";
import ListItem from "components/ListItem";

export default function Reading({
  title,
  items,
}: {
  title: string;
  items: Array<ReadingEntry>;
}): ReactElement {
  return (
    <div>
      <Subtitle css={{ marginBottom: "$2" }}>{title}</Subtitle>
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
