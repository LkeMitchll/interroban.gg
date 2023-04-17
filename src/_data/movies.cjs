const LetterboxdAPI = require('../_providers/letterboxd.cjs');

module.exports = async function movies() {
  const api = new LetterboxdAPI();
  const data = await api.getMovies();
  return data.slice(0, 6);
};
