const Fetch = require('@11ty/eleventy-fetch');

module.exports = class BookmarksAPI {
  constructor() {
    this.credentials = Buffer.from(
      `${process.env.BOOKMARKS_USER}:${process.env.BOOKMARKS_PASSWORD}`,
    ).toString('base64');
  }

  fetchPublishedBookmarks() {
    return Fetch(
      `${process.env.BOOKMARKS_URL}/bookmarks?filter=published`,
      {
        duration: '1d',
        type: 'json',
        fetchOptions: {
          headers: {
            Authorization: `Basic ${this.credentials}`,
          },
        },
      },
    );
  }
};