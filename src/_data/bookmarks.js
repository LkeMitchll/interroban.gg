import BookmarksAPI from '../_providers/bookmarks.js';

function numberedBookmarks(data) {
  data.forEach((entry, i) => {
    const e = entry;
    e.number = i;
  });
  return data;
}

async function bookmarks() {
  const api = new BookmarksAPI();

  const data = await api.fetchPublishedBookmarks()
    .then((json) => numberedBookmarks(json));

  return data;
}

export default bookmarks();
