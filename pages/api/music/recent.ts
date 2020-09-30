import { NextApiRequest, NextApiResponse } from "next";
import { MusicAPI } from "services/spotify";
import { PlayHistoryObject, Track } from "services/spotify.types";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Track[]>,
): Promise<any> => {
  const api = new MusicAPI();
  const response = await api.getRecentTracks();
  const { items } = await response.json();

  const tracks: Track[] = items.map((song: PlayHistoryObject) => ({
    id: song.track.id,
    artist: song.track.artists
      .map((_artist: SpotifyApi.ArtistObjectFull) => _artist.name)
      .join(", "),
    album: song.track.album.name,
    title: song.track.name,
    cover: song.track.album.images[1].url,
    url: song.track.external_urls.spotify,
  }));

  res.status(200).json(tracks);
};
