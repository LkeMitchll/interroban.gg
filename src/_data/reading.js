import LiteralAPI from "../_providers/literal.js";

async function reading() {
  const response = new LiteralAPI();

  return response.getCurrentlyReadingBooks().then((json) => json);
}

async function wantToRead() {
  const response = new LiteralAPI();

  return response.getWantToReadBooks().then((json) => json);
}

export default { readingNow: await reading(), wantToRead: await wantToRead() };
