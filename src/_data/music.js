import SpotifyAPI from "../providers/spotify";
import LastFMAPI from "../providers/lastfm";
import dateToEpochWithOffset from "../helpers/dateEpochOffset";

async function lastWeek() {
  const api = new LastFMAPI();
  const comparisonStart = dateToEpochWithOffset(0, 12);
  const lastWeekStart = dateToEpochWithOffset(0, 6);
  const lastWeekEnd = dateToEpochWithOffset(23, 0);

  const comparisonTracks = await api
    .fetchTrackTotal(comparisonStart, lastWeekStart)
    .then((response) => response.json())
    .then((json) => Number(json.recenttracks["@attr"].total));
  const comparisonAlbums = await api
    .fetchAlbumTotal(comparisonStart, lastWeekStart)
    .then((response) => response.json())
    .then((json) => json.weeklyalbumchart.album.length);
  const lastWeekTracks = await api
    .fetchTrackTotal(lastWeekStart, lastWeekEnd)
    .then((response) => response.json())
    .then((json) => Number(json.recenttracks["@attr"].total));
  const lastWeekAlbums = await api
    .fetchAlbumTotal(lastWeekStart, lastWeekEnd)
    .then((response) => response.json())
    .then((json) => json.weeklyalbumchart.album.length);

  return {
    tracks: {
      total: lastWeekTracks,
      difference: {
        total: Math.abs(lastWeekTracks - comparisonTracks),
        type: comparisonTracks > lastWeekTracks ? "negative" : "positive",
        icon: comparisonTracks > lastWeekTracks ? "&darr;" : "&uarr;",
      },
    },
    albums: {
      total: lastWeekAlbums,
      difference: {
        total: Math.abs(lastWeekAlbums - comparisonAlbums),
        type: comparisonAlbums > lastWeekAlbums ? "negative" : "positive",
        icon: comparisonAlbums > lastWeekTracks ? "&darr;" : "&uarr;",
      },
    },
  };
}

async function thisWeek() {
  const api = new LastFMAPI();
  const date = new Date();

  const lastWeekEnd = dateToEpochWithOffset(23, 0);
  const now = Math.round(date.valueOf() / 1000).toString();

  const tracksResponse = await api
    .fetchTrackTotal(lastWeekEnd, now)
    .then((response) => response.json());
  const albumsResponse = await api
    .fetchAlbumTotal(lastWeekEnd, now)
    .then((response) => response.json());

  const tracks = tracksResponse.recenttracks["@attr"].total.toString();
  const albums = albumsResponse.weeklyalbumchart.album.length.toString();

  return { tracks, albums };
}

async function topTracks() {
  const api = new SpotifyAPI();
  const response = await api.getTopTracks();
  const { items } = await response.json();

  const tracks = items.map((song) => {
    const artist = song.artists.map((_artist) => _artist.name).join(", ");
    const track = {
      id: song.id,
      artist,
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

  return tracks;
}

async function topArtists() {
  const api = new SpotifyAPI();
  const response = await api.getTopArtists();
  const { items } = await response.json();

  return items;
}

async function music() {
  return {
    lastWeek: await lastWeek(),
    thisWeek: await thisWeek(),
    topTracks: await topTracks(),
    topArtists: await topArtists(),
  };
}

export default music;
