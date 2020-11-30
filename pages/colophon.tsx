import { Hero, PageMeta, RichText, StatsTable } from "components";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import { Page } from "services/contentful.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("3TxaAfROQOMMOtj5U6E4qG");
  return { props: { page } };
};

interface ColophonProps {
  page: Page;
}

export default function Colophon({ page }: ColophonProps): ReactElement {
  return (
    <article>
      <PageMeta title={page.title} />
      <Hero
        title={page.title}
        intro={page.description}
        stats={
          <StatsTable
            data={[
              {
                label: "Updated",
                data: page.lastUpdate,
              },
            ]}
          />
        }
        layoutOverride={{ initial: "fullWidth", bp2: "center" }}
      />
      <RichText source={page.content} />
    </article>
  );
}
