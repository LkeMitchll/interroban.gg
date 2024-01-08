import FeedbinAPI from '../_providers/feedbin.cjs';

async function feeds() {
  const api = new FeedbinAPI();

  return api.getSubscriptions().then((json) => json);
}

export default feeds();
