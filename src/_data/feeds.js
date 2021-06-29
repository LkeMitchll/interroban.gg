const fetch = require("node-fetch");

module.exports = async function feeds() {
  const apiEndpoint = "https://api.feedbin.com/v2/";
  const subscriptionsEndpoint = `${apiEndpoint}subscriptions.json`;

  const credentials = Buffer.from(
    `${process.env.FEEDBIN_USER}:${process.env.FEEDBIN_PASS}`
  ).toString("base64");

  const fetchFeeds = fetch(subscriptionsEndpoint, {
    headers: {
      Authorization: `Basic ${credentials}`,
    },
  });

  const request = await fetchFeeds;
  const response = await request.json();

  return response;
};
