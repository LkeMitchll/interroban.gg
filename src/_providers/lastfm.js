const Cache = require("@11ty/eleventy-fetch");

module.exports = class LastFMAPI {
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

    return Cache(`${this.apiEndpoint}?${params}`, {
      duration: "1h",
      type: "json",
    });
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

    return Cache(`${this.apiEndpoint}?${params}`, {
      duration: "1h",
      type: "json",
    });
  }
};
