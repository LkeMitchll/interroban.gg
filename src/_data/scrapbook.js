const SaveeAPI = require("../_providers/savee");

module.exports = async function scrapbook() {
  const api = new SaveeAPI();

  return api.getItems().then((json) => json.data);
};
