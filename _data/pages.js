const contentful = require("../providers/contentful");

module.exports = async function pages() {
  return contentful.client
    .getEntries({ content_type: "page" })
    .then((result) => result.items);
};
