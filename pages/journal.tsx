import {
  ArrowLink,
  Hero,
  Listening,
  Now,
  PageMeta,
  Splitter,
  TextList,
} from "components";
import { PlainList, Table, TableCell, TableRow } from "components/designSystem";
import fs from "fs";
import generateRss from "helpers/rss";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import type {
  BlogPostPreview,
  JournalEntry,
  Page,
} from "services/contentful.types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("5sXnSwGVJePuWZpcOZvIML");
  const journalEntry = await api.fetchJournalEntry();
  const blogPosts = await api.fetchBlogPosts();
  const readingEntries = await api.fetchList("2uust09L73V2AcXwl3F80h");

  const blogPostsFull = await api.fetchBlogPostsFull();
  const rss = generateRss(blogPostsFull);
  fs.writeFileSync("./public/rss.xml", rss);

  return { props: { page, journalEntry, blogPosts, readingEntries } };
};

interface JournalProps {
  page: Page;
  journalEntry: JournalEntry;
  blogPosts: BlogPostPreview[];
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
    <>
      <Table>
        <tbody>
          <TableRow>
            <TableCell appearance="alternative">Total</TableCell>
            <TableCell>{blogPosts.length} Posts</TableCell>
          </TableRow>
          <TableRow>
            <TableCell appearance="alternative">Updated</TableCell>
            <TableCell>{blogPosts[0].date}</TableCell>
          </TableRow>
        </tbody>
      </Table>
      <PlainList>
        <li>
          <ArrowLink url="/rss.xml" text="RSS Feed" />
        </li>
        <li>
          <ArrowLink url="/api/posts" text="Posts API" />
        </li>
      </PlainList>
    </>
  );

  return (
    <>
      <PageMeta title={page.title} />
      <Hero title={page.title} intro={page.description} stats={stats} />
      <Splitter
        col1={<Now entry={journalEntry} />}
        col2={
          <TextList
            title="Recent Posts"
            items={blogPosts}
            titleTag="h2"
            titleSize="small"
          />
        }
        reverse
        margin="large"
      />
      <Splitter
        col1={<Listening totals={LastWeek} tracks={recentTracks} />}
        col2={
          <TextList
            title={readingEntries.title}
            items={readingEntries.items}
            titleTag="h2"
            titleSize="small"
            externalLinks
          />
        }
      />
    </>
  );
}
