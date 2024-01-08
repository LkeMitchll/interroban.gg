import SaveeAPI from '../_providers/savee.cjs';

async function scrapbook() {
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
}

export default scrapbook();
