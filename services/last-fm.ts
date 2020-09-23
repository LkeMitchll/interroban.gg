export class LastFMAPI {
  apiEndpoint: string;
  apiKey: string;
  username: string;

  constructor() {
    this.apiEndpoint = "http://ws.audioscrobbler.com/2.0/";
    this.apiKey = process.env.LASTFM_API_KEY;
    this.username = "luke--mitchell";
  }

  fetchTrackTotal(from: string, to: string): Promise<Response> {
    const options = {
      method: "user.getrecenttracks",
      api_key: this.apiKey,
      user: this.username,
      format: "json",
      from: from,
      to: to,
    };
    const params = Object.entries(options)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
    return fetch(`${this.apiEndpoint}?${params}`);
  }

  fetchAlbumTotal(from: string, to: string): Promise<Response> {
    const options = {
      method: "user.getweeklyalbumchart",
      api_key: this.apiKey,
      user: this.username,
      format: "json",
      from: from,
      to: to,
    };
    const params = Object.entries(options)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");
    return fetch(`${this.apiEndpoint}?${params}`);
  }
}
