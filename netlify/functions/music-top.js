const fetch = require("node-fetch");

class SpotifyAPI {
  constructor() {
    this.tokenEndpoint = "https://accounts.spotify.com/api/token";
    this.apiEndpoint = "https://api.spotify.com/v1/me";

    this.credentials = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
    ).toString("base64");

    this.topTracksEndpoint = `${this.apiEndpoint}/top/tracks?time_range=short_term&limit=5`;
  }

  async getAccessToken() {
    const response = await fetch(this.tokenEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Basic ${this.credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=refresh_token&refresh_token=${process.env.SPOTIFY_REFRESH_TOKEN}`,
    });

    return response.json();
  }

  async getTopTracks() {
    /* eslint camelcase: "off" */
    const { access_token } = await this.getAccessToken();

    return fetch(this.topTracksEndpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }
}

exports.handler = async () => {
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

  return {
    statusCode: 200,
    body: JSON.stringify(tracks),
  };
};
