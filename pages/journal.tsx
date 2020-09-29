import { Splitter, Title } from "components";
import { Listening, Now, Posts, Reading } from "compositions";
import { ContentAPI } from "services/contentful";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { BlogPost, JournalEntry } from "services/contentful.types";
import useSWR from "swr";
import generateRss from "helpers/rss";
import fs from "fs";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const journalEntry = await api.fetchJournalEntry();
  const blogPosts = await api.fetchBlogPosts();
  const readingEntries = await api.fetchList("2uust09L73V2AcXwl3F80h");
  const rss = generateRss(blogPosts);

  fs.writeFileSync("./public/rss.xml", rss);
  return { props: { journalEntry, blogPosts, readingEntries } };
};

interface JournalProps {
  journalEntry: JournalEntry;
  blogPosts: Array<BlogPost>;
  readingEntries: any;
}

export default function Journal({
  journalEntry,
  blogPosts,
  readingEntries,
}: JournalProps): ReactElement {
  const recentTracks = useSWR("/api/music/top", fetcher).data;
  const LastWeek = useSWR("/api/music", fetcher).data;

  return (
    <>
      <Title
        title="Journal"
        link={{ url: "/", text: "Back" }}
        css={{ marginBottom: "$2_5" }}
      />
      <Splitter
        col1={
          <div>
            <Now entry={journalEntry} />
          </div>
        }
        col2={<Posts title="Posts" posts={blogPosts} compact />}
        css={{ marginBottom: "$3" }}
        reverse
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
