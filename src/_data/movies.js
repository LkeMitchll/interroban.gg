const LetterboxdAPI = require("../_providers/letterboxd");

module.exports = async function movies() {
  const api = new LetterboxdAPI();
  const data = await api.getMovies();
  return data.slice(0, 6);
};
