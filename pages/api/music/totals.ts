import { NextApiRequest, NextApiResponse } from "next";
import { LastFMAPI } from "services/last-fm";
import {
  RecentTracks,
  WeeklyAlbumChart,
  MusicTotals,
} from "services/last-fm.types";

const convertDate = (time: number, offset: number): string => {
  const date = new Date();
  date.setHours(time);
  date.setDate(date.getDate() - date.getDay() - offset);
  return Math.round(date.valueOf() / 1000).toString();
};

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<MusicTotals>,
): Promise<any> => {
  const api = new LastFMAPI();

  const tracksResponse = await api.fetchTrackTotal(
    convertDate(0, 6),
    convertDate(23, 0),
  );
  const albumsResponse = await api.fetchAlbumTotal(
    convertDate(0, 6),
    convertDate(23, 0),
  );

  const tracksData: RecentTracks = await tracksResponse.json();
  const albumsData: WeeklyAlbumChart = await albumsResponse.json();

  const tracks = tracksData.recenttracks["@attr"].total.toString();
  const albums = albumsData.weeklyalbumchart.album.length.toString();

  res.status(200).json({ tracks: tracks, albums: albums });
};
