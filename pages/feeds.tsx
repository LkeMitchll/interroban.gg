import { ArrowLink, Hero, ListItem, PageMeta, StatsTable } from "components";
import { PlainList } from "components/designSystem";
import { formattedDate } from "helpers/date";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import type { Page } from "services/contentful.types";
import { FeedAPI } from "services/feedbin";
import type { Feed } from "services/feedbin.types";
import { css } from "stitches";

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
  const Wrapper = css({
    display: "grid",
    gridColumnGap: "$2",
    gridTemplateColumns: "1fr",

    bp1: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    bp2: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    bp3: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  });

  return (
    <>
      <PageMeta title={page.title} />
      <Hero title={page.title} stats={stats} intro={page.description} />
      <PlainList className={Wrapper}>
        {feeds.map((feed) => (
          <ListItem
            key={feed.id}
            title={feed.title}
            url={feed.site_url}
            subtitle={`Reading since: ${formattedDate(feed.created_at, {
              month: "short",
              year: "numeric",
            })}`}
          />
        ))}
      </PlainList>
    </>
  );
}
