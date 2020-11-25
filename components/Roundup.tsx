import type { ReactElement } from "react";
import type { Bookmark, Roundup as TRoundup } from "services/contentful.types";
import { styled } from "stitches";
import { A, NumberedList, P } from "./designSystem";

const Item = styled("li", {
  marginBottom: "$2",

  " a": {
    display: "block",
    marginBottom: "$1",
  },
});

export default function Roundup({ data }: { data: TRoundup }): ReactElement {
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
