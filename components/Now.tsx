import { RichText } from "components";
import { Heading, SecondaryText } from "designSystem";
import { formattedDate } from "helpers/date";
import type { ReactElement } from "react";
import { JournalEntry } from "services/contentful.types";
import { styled } from "stitches";

const Container = styled("div", {
  paddingRight: "$2",
});

export default function Now({ entry }: { entry: JournalEntry }): ReactElement {
  return (
    <Container>
      <Heading as="h3" margin="medium" size="small">
        What I&apos;m doing now
      </Heading>
      <RichText source={entry.content} unwrapped />
      <SecondaryText css={{ marginTop: "$2" }}>
        Last updated &ndash;{" "}
        {formattedDate(entry.date, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </SecondaryText>
    </Container>
  );
}
