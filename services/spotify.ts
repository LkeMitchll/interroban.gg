export class MusicAPI {
  tokenEndpoint: string;
  apiEndpoint: string;
  recentlyPlayedEndpoint: string;
  topTracksEndpoint: string;
  credentials: string;

  constructor() {
    this.tokenEndpoint = "https://accounts.spotify.com/api/token";
    this.apiEndpoint = "https://api.spotify.com/v1/me";

    this.credentials = Buffer.from(
      `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
    ).toString("base64");

    this.recentlyPlayedEndpoint = `${this.apiEndpoint}/player/recently-played`;
    this.topTracksEndpoint = `${this.apiEndpoint}/top/tracks`;
  }

  async getAccessToken(): Promise<Record<"access_token", string>> {
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

  async request(endpoint: string): Promise<Response> {
    const { access_token } = await this.getAccessToken();

    return fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }

  async getRecentTracks(): Promise<Response> {
    return this.request(`${this.recentlyPlayedEndpoint}?limit=50`);
  }

  async getTopTracks(): Promise<Response> {
    return this.request(
      `${this.topTracksEndpoint}?time_range=short_term&limit=5`,
    );
  }
}
