import FeedbinAPI from "../_providers/feedbin.js";

async function feeds() {
  const api = new FeedbinAPI();

  return api.getSubscriptions().then((json) => json);
}

export default feeds();
