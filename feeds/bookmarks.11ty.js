class Posts {
  constructor() {
    this.filename = "bookmarks.json";
    this.combinedData = [];
  }

  data() {
    return {
      permalink: `/feeds/${this.filename}`,
    };
  }

  render(data) {
    data.bookmarks.forEach((year) => {
      this.combinedData.push(...year.bookmarks);
    });
    const bookmarks = this.combinedData.map((bookmark) => ({
      id: bookmark.sys.id,
      content_html: `<p>Link: <a href="${bookmark.fields.url}">${bookmark.fields.title}</a></p><ul><li>Added: ${bookmark.fields.publishDate}</li><li>Tag: ${bookmark.fields.tag}</li></ul>`,
      url: bookmark.fields.url,
      date_published: bookmark.sys.createdAt,
      title: bookmark.fields.title,
    }));

    const wrapper = {
      version: "https://jsonfeed.org/version/1.1",
      title: "Luke Mitchell | Bookmarks",
      description:
        "I try and keep track of all the interesting things I find on my travels around the web. Because the internet never stops changing, as this list gets older things will begin to decay and disappear. So this isn’t an archive as such, it’s a log.",
      icon: "https://interroban.gg/assets/images/favicon.svg",
      favicon: "https://interroban.gg/assets/images/favicon.svg",
      authors: [{ name: "Luke Mitchell", url: "https://interroban.gg" }],
      language: "en",
      home_page_url: "https://interroban.gg/bookmarks/2021",
      feed_url: "https://interroban.gg/feeds/bookmarks.json",
      items: bookmarks,
    };

    return JSON.stringify(wrapper);
  }
}

module.exports = Posts;
