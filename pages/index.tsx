import { GetStaticProps } from "next";
import useSWR from "swr";
import { ContentAPI } from "../services/contentful";
import { ReactElement } from "react";
import { Page } from "../services/contentful.types";
import { Track } from "../services/spotify.types";
import Head from "next/head";
import { Header } from "../components/compositions";
import { About } from "../components/compositions/Home";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("gs1BugZQXA8mN7DniEOFx");
  return { props: page };
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = (page: Page): ReactElement => {
  const recentTracks = useSWR("/api/music/recent", fetcher).data;

  if (!recentTracks) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Luke Mitchell</title>
      </Head>

      <Header />
      <main>
        <About content={page} />
        <ul>
          {recentTracks.map((track: Track, i: number) => (
            <li key={i}>
              {track.artist} -{track.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Home;
