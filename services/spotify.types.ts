export type Track = {
  id: string;
  artist: string;
  album: string;
  title: string;
  cover: string;
  url: string;
};

export type PlayHistoryObject = {
  track: SpotifyApi.TrackObjectFull;
  played_at: string;
  context: SpotifyApi.ContextObject;
};
