const Cache = require("@11ty/eleventy-fetch");

module.exports = class FeedbinAPI {
  constructor() {
    this.apiEndpoint = "https://api.feedbin.com/v2/";
    this.credentials = Buffer.from(
      `${process.env.FEEDBIN_USER}:${process.env.FEEDBIN_PASS}`
    ).toString("base64");
    this.subscriptionsEndpoint = `${this.apiEndpoint}subscriptions.json`;
  }

  async getSubscriptions() {
    return Cache(this.subscriptionsEndpoint, {
      duration: "1d",
      type: "json",
      fetchOptions: {
        headers: {
          Authorization: `Basic ${this.credentials}`,
        },
      },
    });
  }
};
