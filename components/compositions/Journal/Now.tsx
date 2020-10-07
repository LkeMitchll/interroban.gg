import { RichText } from "components";
import { SecondaryText, Heading } from "designSystem";
import { ReactElement } from "react";
import { JournalEntry } from "services/contentful.types";
import { formattedDate } from "helpers/date";
import { styled } from "tokens";

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
