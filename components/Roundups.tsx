import { A, Heading, NumberedList, P } from "designSystem";
import type { ReactElement } from "react";
import type { Bookmark, Roundup as TRoundup } from "services/contentful.types";
import { styled } from "stitches";

const Item = styled("li", {
  marginBottom: "$2",

  " a": {
    display: "block",
    marginBottom: "$1",
  },
});

export default function List({ roundup }: { roundup: TRoundup }): ReactElement {
  return (
    <>
      <Heading as="h3" margin="medium" size="small">
        Favourites - {roundup.title}
      </Heading>
      <NumberedList>
        {roundup.links.map((link: Bookmark) => (
          <Item key={link.id}>
            <A href={link.url} target="_blank" rel="noreferrer">
              {link.title}
            </A>
            <P>{link.notes}</P>
          </Item>
        ))}
      </NumberedList>
    </>
  );
}
