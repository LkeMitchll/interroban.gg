const FeedbinAPI = require('../_providers/feedbin.cjs');

module.exports = async function feeds() {
  const api = new FeedbinAPI();

  return api.getSubscriptions().then((json) => json);
};
