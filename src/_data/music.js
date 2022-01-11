const SpotifyAPI = require("../providers/spotify");
const LastFMAPI = require("../providers/lastfm");

function dateToEpochWithOffset(time, offset) {
  const date = new Date();
  date.setHours(time);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  date.setDate(date.getDate() - date.getDay() - offset);
  return Math.round(date.valueOf() / 1000).toString();
}

async function lastWeek() {
  const api = new LastFMAPI();
  const lastWeekStart = dateToEpochWithOffset(0, 6);
  const lastWeekEnd = dateToEpochWithOffset(23, 0);

  const lastWeekTracks = await api
    .fetchTrackTotal(lastWeekStart, lastWeekEnd)
    .then((json) => Number(json.recenttracks["@attr"].total));
  const lastWeekAlbums = await api
    .fetchAlbumTotal(lastWeekStart, lastWeekEnd)
    .then((json) => json.weeklyalbumchart.album.length);

  return {
    title: "Last week",
    tracks: {
      title: "Tracks",
      total: lastWeekTracks,
    },
    albums: {
      title: "Albums",
      total: lastWeekAlbums,
    },
  };
}

async function thisWeek() {
  const api = new LastFMAPI();
  const date = new Date();
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  const lastWeekEnd = dateToEpochWithOffset(23, 0);
  const now = Math.round(date.valueOf() / 1000).toString();

  const thisWeekTracks = await api
    .fetchTrackTotal(lastWeekEnd, now)
    .then((json) => json.recenttracks["@attr"].total);
  const thisWeekAlbums = await api
    .fetchAlbumTotal(lastWeekEnd, now)
    .then((json) => json.weeklyalbumchart.album.length);

  return {
    title: "This week (so far)",
    tracks: {
      title: "Tracks",
      total: thisWeekTracks,
    },
    albums: {
      title: "Albums",
      total: thisWeekAlbums,
    },
  };
}

async function topTracks() {
  const api = new SpotifyAPI();
  const response = await api.getTopTracks();

  const tracks = response.items.map((song) => {
    const artist = song.artists.map((_artist) => _artist.name).join(", ");
    return {
      id: song.id,
      artist,
      album: song.album.name,
      title: song.name,
      url: song.external_urls.spotify,
    };
  });

  return tracks;
}

async function topArtists() {
  const api = new SpotifyAPI();
  const response = await api.getTopArtists();

  return response.items.map((artist) => ({
    id: artist.id,
    name: artist.name,
    url: artist.external_urls.spotify,
  }));
}

module.exports = async function music() {
  return {
    lastWeek: await lastWeek(),
    thisWeek: await thisWeek(),
    topTracks: await topTracks(),
    topArtists: await topArtists(),
  };
};
