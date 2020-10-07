import { ReactElement } from "react";
import { Bookmark, Roundup as Type } from "services/contentful.types";
import { A, NumberedList, P } from "./designSystem";
import { styled } from "tokens";

const Item = styled("li", {
  marginBottom: "$2",

  " a": {
    display: "block",
    marginBottom: "$1",
  },
});

export default function Roundup({ data }: { data: Type }): ReactElement {
  return (
    <NumberedList>
      {data.links.map((link: Bookmark) => (
        <Item key={link.id}>
          <A href={link.url}>{link.title}</A>
          <P>{link.notes}</P>
        </Item>
      ))}
    </NumberedList>
  );
}
