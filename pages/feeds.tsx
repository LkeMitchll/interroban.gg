import { ArrowLink, Hero, ListItem, PageMeta, StatsTable } from "components";
import { Grid, GridChild, PlainList } from "components/designSystem";
import { formattedDate } from "helpers/date";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import type { Page } from "services/contentful.types";
import { FeedAPI } from "services/feedbin";
import type { Feed } from "services/feedbin.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("3xhMUYmeQZf3KrXmlutr9k");
  const feedAPI = new FeedAPI();
  const feeds = await feedAPI.fetchSubscriptions();

  return { props: { page, feeds } };
};

export default function FeedsPage({
  page,
  feeds,
}: {
  page: Page;
  feeds: Feed[];
}): ReactElement {
  const stats = (
    <>
      <StatsTable
        data={[
          { label: "Total", data: feeds.length },
          {
            label: "Updated",
            data: formattedDate(feeds[0].created_at, {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            }),
          },
        ]}
      />
      <ArrowLink url="/api/feeds" text="/api/feeds" />
    </>
  );

  return (
    <article>
      <PageMeta title={page.title} />
      <Hero title={page.title} stats={stats} intro={page.descriptionRich} />
      <Grid as={PlainList}>
        {feeds.map((feed) => (
          <GridChild
            key={feed.id}
            as="li"
            column={{ initial: "fullWidth", bp2: "auto" }}
          >
            <ListItem
              title={feed.title}
              url={feed.site_url}
              subtitle={`Reading since: ${formattedDate(feed.created_at, {
                month: "short",
                year: "numeric",
              })}`}
              unwrapped
            />
          </GridChild>
        ))}
      </Grid>
    </article>
  );
}
