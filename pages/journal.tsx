import { ReactElement } from "react";
import useSWR from "swr";
import { Track } from "../services/spotify.types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Journal(): ReactElement {
  const recentTracks = useSWR("/api/music/recent", fetcher).data;

  if (!recentTracks) {
    return null;
  }

  return (
    <ul>
      {recentTracks.map((track: Track, i: number) => (
        <li key={i}>
          {track.artist} -{track.title}
        </li>
      ))}
    </ul>
  );
}
