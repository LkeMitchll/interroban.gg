class Posts {
  constructor() {
    this.filename = "posts.json";
  }

  data() {
    return {
      permalink: `/feeds/${this.filename}`,
    };
  }

  render(data) {
    const posts = data.posts.map((post) => ({
      id: post.sys.id,
      content_html: this.renderMarkdown(post.fields.contentMarkdown),
      url: `https://interroban.gg/posts/${post.fields.slug}`,
      summary: post.fields.description,
      date_published: post.sys.createdAt,
      title: post.fields.title,
    }));

    const wrapper = {
      version: "https://jsonfeed.org/version/1.1",
      title: "Luke Mitchell | Product Designer",
      description:
        "Personal site, blog, and portfolio of Luke Mitchell, a design director, product designer, and UI developer.",
      icon: "https://interroban.gg/assets/images/favicon.svg",
      favicon: "https://interroban.gg/assets/images/favicon.svg",
      authors: [{ name: "Luke Mitchell", url: "https://interroban.gg" }],
      language: "en",
      home_page_url: "https://interroban.gg",
      feed_url: "https://interroban.gg/feeds/posts.json",
      items: posts,
    };

    return JSON.stringify(wrapper);
  }
}

module.exports = Posts;
