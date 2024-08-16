import Fetch from "@11ty/eleventy-fetch";

export default class BookmarksAPI {
  constructor() {
    this.apiEndpoint = `${process.env.BOOKMARKS_URL}/bookmarks?filter=published`;
  }

  fetchPublishedBookmarks() {
    return Fetch(this.apiEndpoint, {
      duration: "1d",
      type: "json",
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${process.env.BOOKMARKS_KEY}`,
        },
      },
    });
  }
}
