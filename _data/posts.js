const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = async function posts() {
  return client
    .getEntries({
      content_type: "post",
      order: "-fields.date",
    })
    .then((result) => result.items);
};
