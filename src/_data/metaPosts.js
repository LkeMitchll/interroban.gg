const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = async function metaPosts() {
  return client
    .getEntries({
      content_type: "metaPost",
      order: "-fields.date",
    })
    .then((result) => result.items);
};
