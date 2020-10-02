import { ListItem, Title } from "components";
import { Hero } from "components/compositions";
import { PlainList } from "components/designSystem";
import { css } from "components/stitches";
import { formattedDate } from "helpers/date";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import { Page } from "services/contentful.types";
import { FeedAPI } from "services/feedbin";
import { Feed } from "services/feedbin.type";

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
      <Hero title={page.title} intro={page.description} />
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
