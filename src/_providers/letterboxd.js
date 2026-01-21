import Fetch from "@11ty/eleventy-fetch";

export default class LetterboxdAPI {
  constructor() {
    this.url = `${process.env.LETTERBOXD_URL}/watches?limit=6`;
  }

  async getWatches() {
    return Fetch(this.url, {
      duration: "1d",
      type: "json",
      fetchOptions: {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    });
  }
}

