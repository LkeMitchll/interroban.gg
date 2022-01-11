const contentful = require("../providers/contentful");

module.exports = async function metaPosts() {
  return contentful.client
    .getEntries({
      content_type: "metaPost",
      order: "-fields.date",
    })
    .then((result) => result.items);
};
