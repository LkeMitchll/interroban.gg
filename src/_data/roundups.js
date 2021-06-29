const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = async function roundups() {
  return client
    .getEntries({
      content_type: "roundup",
      order: "-fields.date",
    })
    .then((result) => result.items);
};
