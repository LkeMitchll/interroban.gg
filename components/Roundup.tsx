import { ReactElement } from "react";
import { Bookmark, Roundup as Type } from "services/contentful.types";
import { A, NumberedList, P } from "./designSystem";
import { styled } from "tokens";

const Item = styled("li", {
  marginBottom: "$2",
});

export default function Roundup({ data }: { data: Type }): ReactElement {
  return (
    <NumberedList>
      {data.links.map((link: Bookmark) => (
        <Item key={link.id}>
          <A
            css={{ marginLeft: "$1", marginBottom: "$1", display: "block" }}
            href={link.url}
          >
            {link.title}
          </A>
          <P css={{ marginLeft: "-$1" }}>{link.notes}</P>
        </Item>
      ))}
    </NumberedList>
  );
}
