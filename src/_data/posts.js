const contentful = require("../providers/contentful");

module.exports = async function posts() {
  return contentful.client
    .getEntries({
      content_type: "post",
      order: "-fields.date",
    })
    .then((result) => {
      /* eslint no-param-reassign: "off" */
      result.items.forEach((item) => {
        const date = new Date(item.fields.date);
        item.fields.date = date;
      });
      return result.items;
    });
};
