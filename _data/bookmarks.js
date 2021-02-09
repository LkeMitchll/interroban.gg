const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = async function bookmarks(limit) {
  return client
    .getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
      limit: limit || 1000,
    })
    .then((result) => result.items);
};
