import { Roundup } from "components";
import { Heading } from "designSystem";
import type { ReactElement } from "react";
import type { Roundup as TRoundup } from "services/contentful.types";

export default function List({ roundup }: { roundup: TRoundup }): ReactElement {
  return (
    <>
      <Heading as="h3" margin="medium" size="small">
        Favourites - {roundup.title}
      </Heading>
      <Roundup data={roundup} />
    </>
  );
}
