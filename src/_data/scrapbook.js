const SaveeAPI = require("../_providers/savee");

module.exports = async function scrapbook() {
  const response = new SaveeAPI();

  return response.getItems().then((json) => {
    json.data.userByUsername.items.items.map((item) => {
      const { width, ratio } = item.asset.image;
      item.asset.image.height = width * ratio;
      return item;
    });
    return json.data.userByUsername.items.items;
  });
};
