import {
  ArrowLink,
  Bookmarks,
  Hero,
  PageMeta,
  Roundups,
  Splitter,
} from "components";
import { Table, TableCell, TableRow } from "designSystem";
import { formattedDate } from "helpers/date";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import type {
  Asset,
  Bookmark,
  Page,
  Roundup as TRoundup,
} from "services/contentful.types";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("4bctuwqdqxtWxfaNXPLqaI");
  const posts = await api.fetchBookmarks();
  const roundups = await api.fetchRoundups();
  return { props: { posts, page, roundups } };
};

interface BookmarksProps {
  posts: Bookmark[];
  page: Page;
  roundups: TRoundup[];
  image: Asset;
}

const BookmarksPage = ({
  posts,
  page,
  roundups,
}: BookmarksProps): ReactElement => {
  const latestRoundup = roundups[0];
  const bookmarkList = (
    <Bookmarks
      title="All Bookmarks"
      as="h3"
      size="small"
      posts={posts}
      compact
    />
  );
  const roundupList = <Roundups roundup={latestRoundup} />;
  const stats = (
    <div>
      <Table>
        <tbody>
          <TableRow>
            <TableCell appearance="alternative">Total</TableCell>
            <TableCell>{posts.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell appearance="alternative">Updated</TableCell>
            <TableCell>
              {formattedDate(posts[0].date, {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
      <ArrowLink url="/api/bookmarks" text="Bookmarks API" />
    </div>
  );
  return (
    <>
      <PageMeta title={page.title} />
      <Hero title={page.title} stats={stats} intro={page.description} />
      <Splitter col1={bookmarkList} col2={roundupList} reverse />
    </>
  );
};

export default BookmarksPage;
