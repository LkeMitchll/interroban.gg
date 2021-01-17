import { Heading, SecondaryText } from "designSystem";
import { formattedDate } from "helpers/date";
import type { ReactElement } from "react";
import { JournalEntry } from "services/contentful.types";
import Markdown from "./Markdown";

export default function Now({ entry }: { entry: JournalEntry }): ReactElement {
  return (
    <>
      <Heading as="h3" margin="medium" size="small">
        What I&apos;m doing now
      </Heading>
      <section data-cy="now-content">
        <Markdown source={entry.contentMarkdown} unwrapped />
      </section>
      <footer>
        <SecondaryText>
          Last updated &ndash;{" "}
          {formattedDate(entry.date, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </SecondaryText>
      </footer>
    </>
  );
}
