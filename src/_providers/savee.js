import Fetch from "@11ty/eleventy-fetch";

export default class SaveeAPI {
  constructor() {
    this.url = process.env.SAVEE_URL;
  }

  async getItems() {
    return Fetch(this.url, {
      duration: "1d",
      type: "json",
      fetchOptions: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
  }
}
