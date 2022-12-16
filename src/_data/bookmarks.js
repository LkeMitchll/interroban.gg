const BookmarksAPI = require('../_providers/bookmarks');

function numberedBookmarks(data) {
  data.forEach((entry, i) => {
    const e = entry;
    e.number = i;
  });
  return data;
}

module.exports = async function bookmarks() {
  const api = new BookmarksAPI();

  const data = await api.fetchPublishedBookmarks()
    .then((json) => numberedBookmarks(json));

  return data;
};
