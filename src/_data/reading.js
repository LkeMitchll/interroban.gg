import LiteralAPI from "../_providers/literal.js";

async function reading() {
  const response = new LiteralAPI();

  return response.getCurrentlyReadingBooks().then((json) => json);
}

export default reading();
