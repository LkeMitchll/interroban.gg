const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function saveeFeed() {
  const url = "https://api.savee.it/user/interrobang/items/";

  async function getFeed() {
    return Cache(url, {
      duration: "1d",
      type: "json",
      fetchOptions: {
        headers: {
          "Auth-Token": null,
        },
      },
    });
  }

  return getFeed().then((json) => json.data.splice(50));
};
