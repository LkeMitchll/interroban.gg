const contentful = require("../providers/contentful");

module.exports = async function list() {
  return contentful.client
    .getEntries({ content_type: "list" })
    .then((result) => result.items);
};
