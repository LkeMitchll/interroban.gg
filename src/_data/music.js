import SpotifyAPI from "../providers/spotify";
import LastFMAPI from "../providers/lastfm";
import dateToEpochWithOffset from "../helpers/dateEpochOffset";

async function lastWeek() {
  const api = new LastFMAPI();
  const lastSunday = dateToEpochWithOffset(0, 6);
  const lastFriday = dateToEpochWithOffset(23, 0);

  const tracksResponse = await api.fetchTrackTotal(lastSunday, lastFriday);
  const albumsResponse = await api.fetchAlbumTotal(lastSunday, lastFriday);

  const tracksData = await tracksResponse.json();
  const albumsData = await albumsResponse.json();

  const tracks = tracksData.recenttracks["@attr"].total.toString();
  const albums = albumsData.weeklyalbumchart.album.length.toString();

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

async function music() {
  return { lastWeek: await lastWeek(), topTracks: await topTracks() };
}

export default music;
