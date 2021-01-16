import { Hero, PageMeta, RichText, StatsTable } from "components";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import type { Asset, Page } from "services/contentful.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("5SoTrD2jI0S0AhFkkEDheb");
  const heroImage = await api.fetchAsset("53QRaqT5sCB9hDJvRw8I8W");
  return { props: { page, heroImage } };
};

export default function UsesPage({
  page,
  heroImage,
}: {
  page: Page;
  heroImage: Asset;
}): ReactElement {
  return (
    <article>
      <PageMeta title={page.title} />
      <Hero
        title={page.title}
        image={heroImage}
        intro={page.descriptionMarkdown}
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
      />
      <RichText source={page.content} />
    </article>
  );
}
