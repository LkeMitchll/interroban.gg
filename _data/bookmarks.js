const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = function (limit) {
  return client
    .getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
      limit: limit ? limit : 1000,
    })
    .then((result) => {
      return result.items;
    })
    .catch(console.error);
};
