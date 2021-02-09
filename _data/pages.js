const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = async function pages() {
  return client
    .getEntries({ content_type: "page" })
    .then((result) => result.items);
};
