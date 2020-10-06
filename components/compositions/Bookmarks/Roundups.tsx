import { Heading } from "designSystem";
import { Roundup } from "components";
import { ReactElement } from "react";
import { Roundup as RoundupType } from "services/contentful.types";

export default function List({
  roundup,
}: {
  roundup: RoundupType;
}): ReactElement {
  return (
    <>
      <Heading level="h3" css={{ marginBottom: "$2" }} small>
        Favourites - {roundup.title}
      </Heading>
      <Roundup data={roundup} />
    </>
  );
}
