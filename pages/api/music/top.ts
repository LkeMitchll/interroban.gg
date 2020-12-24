import type { NextApiRequest, NextApiResponse } from "next";
import { MusicAPI } from "services/spotify";
import type { Track } from "services/spotify.types";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Track[]>,
): Promise<void> => {
  const api = new MusicAPI();
  const response = await api.getTopTracks();
  const { items } = await response.json();

  const tracks: Track[] = items.map((song: SpotifyApi.TrackObjectFull) => {
    const artist = song.artists
      .map((_artist: SpotifyApi.ArtistObjectFull) => _artist.name)
      .join(", ");
    const track = {
      id: song.id,
      artist: artist,
      album: song.album.name,
      title: song.name,
      cover: {
        url: song.album.images[1].url,
        width: song.album.images[1].width,
        height: song.album.images[1].height,
        alt: `Cover art for ${song.album.name} by ${artist}`,
      },
      url: song.external_urls.spotify,
    };
    return track;
  });

  res.status(200).json(tracks);
};
