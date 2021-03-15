const fetch = require("node-fetch");

class LastFMAPI {
  constructor() {
    this.apiEndpoint = "http://ws.audioscrobbler.com/2.0/";
    this.apiKey = process.env.LASTFM_API_KEY;
    this.username = "luke--mitchell";
  }

  fetchTrackTotal(from, to) {
    const options = {
      method: "user.getrecenttracks",
      api_key: this.apiKey,
      user: this.username,
      format: "json",
      from,
      to,
    };
    const params = Object.entries(options)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
    return fetch(`${this.apiEndpoint}?${params}`);
  }

  fetchAlbumTotal(from, to) {
    const options = {
      method: "user.getweeklyalbumchart",
      api_key: this.apiKey,
      user: this.username,
      format: "json",
      from,
      to,
    };
    const params = Object.entries(options)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
    return fetch(`${this.apiEndpoint}?${params}`);
  }
}

function dateToEpochWithOffset(time, offset) {
  const date = new Date();
  date.setHours(time);
  date.setDate(date.getDate() - date.getDay() - offset);
  return Math.round(date.valueOf() / 1000).toString();
}

exports.handler = async () => {
  const api = new LastFMAPI();
  const lastSunday = dateToEpochWithOffset(0, 6);
  const lastFriday = dateToEpochWithOffset(23, 0);

  const tracksResponse = await api.fetchTrackTotal(lastSunday, lastFriday);
  const albumsResponse = await api.fetchAlbumTotal(lastSunday, lastFriday);

  const tracksData = await tracksResponse.json();
  const albumsData = await albumsResponse.json();

  const tracks = tracksData.recenttracks["@attr"].total.toString();
  const albums = albumsData.weeklyalbumchart.album.length.toString();

  return {
    statusCode: 200,
    body: JSON.stringify({ tracks, albums }),
  };
};
