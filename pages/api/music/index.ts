import { dateToEpochWithOffset } from "helpers/date";
import type { NextApiRequest, NextApiResponse } from "next";
import { LastFMAPI } from "services/last-fm";
import type {
  MusicTotals,
  RecentTracks,
  WeeklyAlbumChart,
} from "services/last-fm.types";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<MusicTotals>
): Promise<void> => {
  const api = new LastFMAPI();
  const lastSunday = dateToEpochWithOffset(0, 6);
  const lastFriday = dateToEpochWithOffset(23, 0);

  const tracksResponse = await api.fetchTrackTotal(lastSunday, lastFriday);
  const albumsResponse = await api.fetchAlbumTotal(lastSunday, lastFriday);

  const tracksData: RecentTracks = await tracksResponse.json();
  const albumsData: WeeklyAlbumChart = await albumsResponse.json();

  const tracks = tracksData.recenttracks["@attr"].total.toString();
  const albums = albumsData.weeklyalbumchart.album.length.toString();

  res.status(200).json({ tracks: tracks, albums: albums });
};
