import { ReactElement } from "react";
import { Bookmark as Type } from "services/contentful.types";
import ListItem from "./ListItem";

export default function Bookmark({ data }: { data: Type }): ReactElement {
  return (
    <ListItem
      title={data.title}
      url={data.url}
      subtitle={`${data.tag}`}
      external
    />
  );
}
