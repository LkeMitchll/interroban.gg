require("dotenv").config();

const fs = require("fs");
const path = require("path");
const postcss = require("postcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));

  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addWatchTarget("assets/**/*.css");

  eleventyConfig.addFilter("findByID", require("./filters/findByID"));
  eleventyConfig.addFilter("limit", require("./filters/limit"));
  eleventyConfig.addFilter("formatDate", require("./filters/date"));
  eleventyConfig.addFilter("toDateObj", require("./filters/toDateObj"));
  eleventyConfig.addFilter("JSONStringify", require("./filters/json"));

  eleventyConfig.addAsyncShortcode("postcss", async () => {
    const filepath = path.join(__dirname, "./assets/style.css");
    const rawCss = fs.readFileSync(filepath);

    return await postcss([
      require("postcss-import"),
      require("autoprefixer"),
      require("cssnano"),
    ])
      .process(rawCss, { from: filepath })
      .then((result) => result.css);
  });
  eleventyConfig.addShortcode(
    "renderMarkdown",
    require("./shortcodes/markdown")
  );
  eleventyConfig.addShortcode(
    "responsiveImage",
    require("./shortcodes/responsiveImage")
  );

  eleventyConfig.on("beforeWatch", (changedFile) => {
    // Trigger hot-reload for changed CSS
    const isCSSFile = changedFile.filter((file) => file.includes("css"));
    // When a CSS file changes 'touch' the layout file
    const time = new Date();
    if (isCSSFile.length > 0) {
      fs.utimesSync("./_includes/layout.njk", time, time);
    }
  });
};
