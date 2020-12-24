import {
  ArrowLink,
  Hero,
  PageMeta,
  Roundups,
  Splitter,
  StatsTable,
  TextList,
} from "components";
import { Button } from "designSystem";
import { formattedDate } from "helpers/date";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { useState } from "react";
import { ContentAPI } from "services/contentful";
import type { Asset, Bookmark, Page, Roundup } from "services/contentful.types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("4bctuwqdqxtWxfaNXPLqaI");
  const posts = await api.fetchBookmarks(10, 0);
  const roundups = await api.fetchRoundups();
  return { props: { posts, page, roundups } };
};

interface BookmarksProps {
  posts: Bookmark[];
  page: Page;
  roundups: Roundup[];
  image: Asset;
}

const BookmarksPage = ({
  posts,
  page,
  roundups,
}: BookmarksProps): ReactElement => {
  const [items, updateItems] = useState(posts);
  const [pageNumber, updatePageNumber] = useState(1);
  const { data, error, isValidating } = useSWR(
    `/api/bookmarks/${pageNumber}`,
    fetcher,
  );
  const pageIsEmpty = data?.length < 1;
  const latestRoundup = roundups[0];

  function handleClick(): void {
    updateItems(items.concat(data));
    updatePageNumber(pageNumber + 1);
  }

  return (
    <>
      <PageMeta title={page.title} />
      <Hero
        title={page.title}
        stats={
          <>
            <StatsTable
              data={[
                { label: "Total", data: posts.length },
                {
                  label: "Updated",
                  data: formattedDate(posts[0].date, {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                  }),
                },
              ]}
            />
            <ArrowLink url="/api/bookmarks" text="Bookmarks API" />
          </>
        }
        intro={page.description}
      />
      <Splitter
        col1={
          <>
            <TextList
              title="All Bookmarks"
              items={items}
              titleTag="h3"
              titleSize="small"
            />
            <Button
              disabled={isValidating || pageIsEmpty}
              onClick={() => handleClick()}
            >
              {isValidating
                ? "Loading..."
                : error
                ? "Error loading bookmarks"
                : pageIsEmpty
                ? "No more bookmarks"
                : "Load more bookmarks"}
            </Button>
          </>
        }
        col2={<Roundups roundup={latestRoundup} />}
      />
    </>
  );
};

export default BookmarksPage;
