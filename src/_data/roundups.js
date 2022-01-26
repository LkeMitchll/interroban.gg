const contentful = require("../_providers/contentful");

module.exports = async function roundups() {
  return contentful.client
    .getEntries({
      content_type: "roundup",
      order: "-fields.date",
    })
    .then((result) => result.items);
};
