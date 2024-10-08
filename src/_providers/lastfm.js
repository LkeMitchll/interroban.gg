import Fetch from "@11ty/eleventy-fetch";

export default class LastFMAPI {
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

    return Fetch(`${this.apiEndpoint}?${params}`, {
      duration: "1d",
      type: "json",
    });
  }

  fetchTopAlbums() {
    const options = {
      method: "user.gettopalbums",
      api_key: this.apiKey,
      user: this.username,
      format: "json",
      period: "3month",
      limit: 5,
    };
    const params = Object.entries(options)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");

    return Fetch(`${this.apiEndpoint}?${params}`, {
      duration: "1d",
      type: "json",
    });
  }

  fetchTopArtists() {
    const options = {
      method: "user.gettopartists",
      api_key: this.apiKey,
      user: this.username,
      format: "json",
      period: "3month",
      limit: 5,
    };
    const params = Object.entries(options)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");

    return Fetch(`${this.apiEndpoint}?${params}`, {
      duration: "1d",
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

    return Fetch(`${this.apiEndpoint}?${params}`, {
      duration: "1d",
      type: "json",
    });
  }
}
