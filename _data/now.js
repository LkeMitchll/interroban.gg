const contentful = require("../providers/contentful");

module.exports = async function now() {
  const result = await contentful.client.getEntries({
    content_type: "journalEntry",
    order: "-fields.date",
    limit: 1,
  });
  return result.items[0];
};
