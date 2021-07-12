const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function saveeFeed() {
  const url = "https://api.savee.it/user/interrobang/items/";

  /* This returns a promise */
  async function getFeed() {
    return Cache(url, {
      duration: "1d", // save for 1 day
      type: "json", // we’ll parse JSON for you
      fetchOptions: {
        headers: {
          "Auth-Token": null,
        },
      },
    });
  }

  return getFeed().then((json) => json.data);
};
