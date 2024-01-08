/* eslint no-underscore-dangle: 0 */
class Posts {
  constructor() {
    this.filename = 'posts.json';
    this.result = [];
  }

  data() {
    return {
      permalink: `/feeds/${this.filename}`,
    };
  }

  render(data) {
    const posts = data.collections.post;
    posts.reverse();
    this.result = posts.map((post) => ({
      id: post.data.page.fileSlug,
      content_html: post.data._templateContent,
      url: `https://interroban.gg${post.url}`,
      summary: post.data.description,
      date_published: post.data.date,
      title: post.data.title,
    }));

    const wrapper = {
      version: 'https://jsonfeed.org/version/1.1',
      title: 'Luke Mitchell | Product Designer',
      description:
        'Personal site, blog, and portfolio of Luke Mitchell, a design director, product designer, and UI developer.',
      authors: [{ name: 'Luke Mitchell', url: 'https://interroban.gg' }],
      language: 'en',
      home_page_url: 'https://interroban.gg',
      feed_url: 'https://interroban.gg/feeds/posts.json',
      items: this.result,
    };

    return JSON.stringify(wrapper);
  }
}

export default Posts;
