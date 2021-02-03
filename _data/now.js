const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = function () {
  return client
    .getEntries({
      content_type: "journalEntry",
      order: "-fields.date",
      limit: 1,
    })
    .then((result) => {
      return result.items[0];
    })
    .catch(console.error);
};
