import { NavLink, Splitter } from "components";
import { Hero, Listening, Now, Posts, Reading } from "compositions";
import { ContentAPI } from "services/contentful";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { BlogPost, JournalEntry, Page } from "services/contentful.types";
import useSWR from "swr";
import generateRss from "helpers/rss";
import fs from "fs";
import { PlainList, Table, TableCell, TableRow } from "components/designSystem";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("5sXnSwGVJePuWZpcOZvIML");
  const journalEntry = await api.fetchJournalEntry();
  const blogPosts = await api.fetchBlogPosts();
  const readingEntries = await api.fetchList("2uust09L73V2AcXwl3F80h");
  const rss = generateRss(blogPosts);

  fs.writeFileSync("./public/rss.xml", rss);
  return { props: { page, journalEntry, blogPosts, readingEntries } };
};

interface JournalProps {
  page: Page;
  journalEntry: JournalEntry;
  blogPosts: BlogPost[];
  readingEntries: any;
}

export default function Journal({
  page,
  journalEntry,
  blogPosts,
  readingEntries,
}: JournalProps): ReactElement {
  const recentTracks = useSWR("/api/music/top", fetcher).data;
  const LastWeek = useSWR("/api/music", fetcher).data;
  const stats = (
    <PlainList>
      <Table>
        <TableRow>
          <TableCell appearance="alternative">Total</TableCell>
          <TableCell>{blogPosts.length} Posts</TableCell>
        </TableRow>
        <TableRow>
          <TableCell appearance="alternative">Updated</TableCell>
          <TableCell>{blogPosts[0].date}</TableCell>
        </TableRow>
      </Table>
      <li>
        <NavLink url="/rss.xml">RSS Feed</NavLink>
      </li>
      <li>
        <NavLink url="/api/posts">Posts API</NavLink>
      </li>
    </PlainList>
  );

  return (
    <>
      <Hero title={page.title} intro={page.description} stats={stats} />
      <Splitter
        col1={<Now entry={journalEntry} />}
        col2={<Posts title="Recent Posts" posts={blogPosts} size="small" />}
        reverse
        margin="large"
      />
      <Splitter
        col1={<Listening totals={LastWeek} tracks={recentTracks} />}
        col2={
          <Reading title={readingEntries.title} items={readingEntries.items} />
        }
      />
    </>
  );
}
