import { NextApiRequest, NextApiResponse } from "next";
import { Track } from "../../../services/spotify.types";
import { getRecentTracks } from "../../../services/spotify";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Array<Track>>,
): Promise<any> => {
  const response = await getRecentTracks();
  const { items } = await response.json();

  const tracks = items.slice(0, 5).map((playedItem: Record<string, any>) => ({
    artist: playedItem.track.artists
      .map((_artist: Record<string, any>) => _artist.name)
      .join(", "),
    title: playedItem.track.name,
  }));

  res.status(200).json(tracks);
};
