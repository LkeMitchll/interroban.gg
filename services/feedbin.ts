import { Feed } from "services/feedbin.types";

export class FeedAPI {
  apiEndpoint: string;
  credentials: string;
  subscriptionsEndpoint: string;

  constructor() {
    this.apiEndpoint = "https://api.feedbin.com/v2/";
    this.subscriptionsEndpoint = `${this.apiEndpoint}subscriptions.json`;

    this.credentials = Buffer.from(
      `${process.env.FEEDBIN_USER}:${process.env.FEEDBIN_PASS}`,
    ).toString("base64");
  }

  async request(endpoint: string): Promise<Response> {
    return fetch(endpoint, {
      headers: {
        Authorization: `Basic ${this.credentials}`,
      },
    });
  }

  async fetchSubscriptions(): Promise<Feed[]> {
    const request = await this.request(`${this.subscriptionsEndpoint}`);
    const response = await request.json();
    return response;
  }
}
