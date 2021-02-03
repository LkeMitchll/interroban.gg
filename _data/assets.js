const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = function () {
  return client
    .getAssets()
    .then((result) => {
      return result.items;
    })
    .catch(console.error);
};
