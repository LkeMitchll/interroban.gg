const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function feeds() {
  const apiEndpoint = "https://api.feedbin.com/v2/";
  const subscriptionsEndpoint = `${apiEndpoint}subscriptions.json`;

  const credentials = Buffer.from(
    `${process.env.FEEDBIN_USER}:${process.env.FEEDBIN_PASS}`
  ).toString("base64");

  async function getSubscriptions() {
    return Cache(subscriptionsEndpoint, {
      duration: "1d",
      type: "json",
      fetchOptions: {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      },
    });
  }

  return getSubscriptions().then((json) => json);
};
