import { NextApiRequest, NextApiResponse } from "next";
import { MusicAPI } from "services/spotify";
import { Track } from "services/spotify.types";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Array<Track>>,
): Promise<any> => {
  const api = new MusicAPI();
  const response = await api.getTopTracks();
  const { items } = await response.json();

  const tracks: Array<Track> = items.map(
    (song: SpotifyApi.TrackObjectFull) => ({
      id: song.id,
      artist: song.artists
        .map((_artist: SpotifyApi.ArtistObjectFull) => _artist.name)
        .join(", "),
      album: song.album.name,
      title: song.name,
      cover: song.album.images[1].url,
      url: song.external_urls.spotify,
    }),
  );

  res.status(200).json(tracks);
};
