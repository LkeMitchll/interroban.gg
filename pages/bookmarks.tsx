import { GetStaticProps } from "next";
import { ContentAPI } from "services/contentful";
import {
  Bookmark,
  Page,
  Roundup as RoundupType,
} from "services/contentful.types";
import { ReactElement } from "react";
import { Hero, List } from "compositions";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("4bctuwqdqxtWxfaNXPLqaI");
  const posts = await api.fetchBookmarks();
  const roundups = await api.fetchRoundups();
  return { props: { posts, page, roundups } };
};

interface BookmarksProps {
  posts: Array<Bookmark>;
  page: Page;
  roundups: Array<RoundupType>;
}

const Bookmarks = ({ posts, page, roundups }: BookmarksProps): ReactElement => {
  const latestRoundup = roundups[0];
  return (
    <>
      <Hero title={page.title} intro={page.description} />
      <List posts={posts} roundup={latestRoundup} />
    </>
  );
};

export default Bookmarks;
