const SaveeAPI = require('../_providers/savee.cjs');

module.exports = async function scrapbook() {
  const response = new SaveeAPI();

  return response.getItems().then((json) => {
    json.data.userByUsername.items.items.map((item) => {
      const i = item;
      const { width, ratio } = i.asset.image;
      i.asset.image.height = width * ratio;
      return i;
    });
    return json.data.userByUsername.items.items;
  });
};
