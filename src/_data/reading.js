import LiteralAPI from "../_providers/literal.js";

async function reading() {
  const response = new LiteralAPI();

  return response.getCurrentlyReadingBooks().then((json) => json);
}

async function readRecently() {
  const response = new LiteralAPI();

  return response.getRecentlyReadBooks().then((json) => json);
}

export default {
  readingNow: await reading(),
  readRecently: await readRecently(),
};
