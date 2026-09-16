import Fetch from "@11ty/eleventy-fetch";

export default class SaveeAPI {
  constructor() {
    this.amount = 50;
    this.url = `https://api.savee.com/v1/saves?limit=${this.amount}`;
  }

  async getItems() {
    return Fetch(this.url, {
      duration: "1d",
      type: "json",
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${process.env.SAVEE_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    });
  }
}
