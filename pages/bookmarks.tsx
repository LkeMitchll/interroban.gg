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
import { Splitter } from "components";

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
  return (
    <>
      <Hero title={page.title} intro={page.description} />
      <Splitter col1={bookmarkList} col2={roundupList} reverse />
    </>
  );
};

export default Bookmarks;
