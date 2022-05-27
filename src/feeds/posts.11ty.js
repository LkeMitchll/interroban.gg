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
    const posts = data.collections.post;
    posts.reverse();
    const result = posts.map((post) => ({
      id: post.data.page.fileSlug,
      content_html: this.markdown(post.template.frontMatter.content),
      url: `https://interroban.gg${post.url}`,
      summary: post.data.description,
      date_published: post.data.date,
      title: post.data.title,
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
      items: result,
    };

    return JSON.stringify(wrapper);
  }
}

module.exports = Posts;
