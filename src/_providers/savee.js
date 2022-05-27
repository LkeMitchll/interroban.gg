const Cache = require("@11ty/eleventy-fetch");

module.exports = class SaveeAPI {
  constructor() {
    this.url = "https://api.savee.it/user/interrobang/items/";
  }

  async getItems() {
    return Cache(this.url, {
      duration: "1d",
      type: "json",
      fetchOptions: {
        headers: {
          "Auth-Token": null,
        },
      },
    });
  }
};
