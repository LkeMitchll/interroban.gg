import { GetStaticProps } from "next";
import { ContentAPI } from "services/contentful";
import {
  Asset,
  Bookmark,
  Page,
  Roundup as RoundupType,
} from "services/contentful.types";
import { ReactElement } from "react";
import { Hero, Bookmarks as AllBookmarks, Roundups } from "compositions";
import { NavLink, Splitter } from "components";
import { Table, TableRow, TableCell } from "designSystem";
import { formattedDate } from "helpers/date";

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
  roundups: RoundupType[];
  image: Asset;
}

const Bookmarks = ({ posts, page, roundups }: BookmarksProps): ReactElement => {
  const latestRoundup = roundups[0];
  const bookmarkList = (
    <AllBookmarks
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
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>{posts.length}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Updated</TableCell>
          <TableCell>
            {formattedDate(posts[0].date, {
              day: "numeric",
              month: "numeric",
              year: "numeric",
            })}
          </TableCell>
        </TableRow>
      </Table>
      <NavLink url="/api/bookmarks">Bookmarks API</NavLink>
    </div>
  );
  return (
    <>
      <Hero title={page.title} stats={stats} intro={page.description} />
      <Splitter col1={bookmarkList} col2={roundupList} reverse />
    </>
  );
};

export default Bookmarks;
