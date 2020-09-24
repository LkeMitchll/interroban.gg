import { Title } from "components";
import { Listening, Now, Posts, Reading } from "compositions";
import { ContentAPI } from "services/contentful";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { BlogPost, JournalEntry } from "services/contentful.types";
import { styled } from "tokens";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const journalEntry = await api.fetchJournalEntry();
  const blogPosts = await api.fetchBlogPosts();
  const readingEntries = await api.fetchList("2uust09L73V2AcXwl3F80h");
  return { props: { journalEntry, blogPosts, readingEntries } };
};

interface JournalProps {
  journalEntry: JournalEntry;
  blogPosts: Array<BlogPost>;
  readingEntries: any;
}

const Container = styled("section", {
  display: "grid",
  gridColumnGap: "$2",
  gridRowGap: "$3",

  variants: {
    layout: {
      oneCol: {
        gridTemplateColumns: "1fr",
      },
      twoCol: {
        gridTemplateColumns: "1fr 1fr",
      },
    },
  },
});

export default function Journal({
  journalEntry,
  blogPosts,
  readingEntries,
}: JournalProps): ReactElement {
  const recentTracks = useSWR("/api/music/top", fetcher).data;
  const LastWeek = useSWR("/api/music/totals", fetcher).data;

  return (
    <>
      <Container layout={{ initial: "oneCol", bp2: "twoCol" }}>
        <div>
          <Title
            title="Journal"
            link={{ url: "/", text: "Back" }}
            css={{ marginBottom: "$2_5" }}
          />
          <Now entry={journalEntry} />
        </div>
        <Posts posts={blogPosts} />
        <Listening totals={LastWeek} tracks={recentTracks} />
        <Reading title={readingEntries.title} items={readingEntries.items} />
      </Container>
    </>
  );
}
