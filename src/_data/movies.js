import LetterboxdAPI from "../_providers/letterboxd.js";

async function movies() {
  const api = new LetterboxdAPI();
  const data = await api.getWatches();

  return data;
}

export default movies();
