class Posts {
  constructor() {
    this.filename = 'bookmarks.json';
  }

  data() {
    return {
      permalink: `/feeds/${this.filename}`,
    };
  }

  render(data) {
    const entries = [...data.bookmarks].reverse();
    const bookmarks = entries.map((bookmark) => ({
      id: bookmark.id,
      content_html: `<p>Link: <a href="${bookmark.url}">${bookmark.title}</a></p><ul><li>Added: ${bookmark.date}</li><li>Tag: ${bookmark.tag}</li></ul>`,
      url: bookmark.url,
      date_published: bookmark.date,
      title: bookmark.title,
    }));

    const wrapper = {
      version: 'https://jsonfeed.org/version/1.1',
      title: 'Luke Mitchell | Bookmarks',
      description:
        'I try and keep track of all the interesting things I find on my travels around the web. Because the internet never stops changing, as this list gets older things will begin to decay and disappear. So this isn’t an archive as such, it’s a log.',
      authors: [{ name: 'Luke Mitchell', url: 'https://interroban.gg' }],
      language: 'en',
      home_page_url: 'https://interroban.gg/bookmarks',
      feed_url: `https://interroban.gg/feeds/${this.filename}`,
      items: bookmarks,
    };

    return JSON.stringify(wrapper);
  }
}

module.exports = Posts;
