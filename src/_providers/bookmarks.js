import Fetch from '@11ty/eleventy-fetch';

export default class BookmarksAPI {
  fetchPublishedBookmarks() {
    return Fetch(
      `${process.env.BOOKMARKS_URL}/bookmarks?filter=published`,
      {
        duration: '1d',
        type: 'json',
        fetchOptions: {
          headers: {
            Authorization: `Bearer ${process.env.BOOKMARKS_KEY}`,
          },
        },
      },
    );
  }
}
