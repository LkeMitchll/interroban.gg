import LetterboxdAPI from "../_providers/letterboxd.js";

async function movies() {
  const api = new LetterboxdAPI();
  const data = await api.getMovies();
  return data.slice(0, 6);
}

export default movies();
