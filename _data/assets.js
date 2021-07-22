const contentful = require("../providers/contentful");

module.exports = async function assets() {
  return contentful.client.getAssets().then((result) => result.items);
};
