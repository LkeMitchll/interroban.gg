export type Track = {
  id: string;
  artist: string;
  album: string;
  title: string;
  cover: CoverArt;
  url: string;
};

export type CoverArt = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export type PlayHistoryObject = {
  track: SpotifyApi.TrackObjectFull;
  played_at: string;
  context: SpotifyApi.ContextObject;
};
