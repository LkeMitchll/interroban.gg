interface Attr {
  from?: string;
  page?: string;
  perPage?: string;
  rank?: string;
  tag?: string;
  to?: string;
  total?: string;
  totalPages?: string;
  user?: string;
}

interface Artist {
  image?: AImage[];
  mbid: string;
  name?: string;
  playcount?: string;
  streamable?: string;
  url?: string;
  "@attr"?: string;
  "#text"?: string;
}

interface Track {
  artist: Artist;
  date?: Date;
  duration?: string;
  image: AImage[];
  mbid: string;
  name: string;
  playcount?: string;
  streamable: Streamable | string;
  url: string;
}

interface Streamable {
  fulltrack: string;
  "#text": string;
}

interface Date {
  uts: string;
  "#text": string;
}

interface AImage {
  size: "small" | "medium" | "large" | "extralarge";
  "#text": string;
}

interface Album {
  artist?: Artist;
  image?: AImage[];
  mbid: string;
  name?: string;
  playcount?: string;
  url?: string;
  "@attr"?: Attr;
  "#text"?: string;
}

export interface RecentTracks {
  recenttracks: {
    track: Track[];
    "@attr": Attr;
  };
}

export interface WeeklyAlbumChart {
  weeklyalbumchart: {
    album: Album[];
    "@attr": Attr;
  };
}

export type MusicTotals = {
  tracks: string;
  albums: string;
};
