require("dotenv").config();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));

  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addWatchTarget("assets/**/*.css");

  eleventyConfig.addFilter("findByID", require("./filters/findByID"));
  eleventyConfig.addFilter("limit", require("./filters/limit"));
  eleventyConfig.addFilter("formatDate", require("./filters/date"));
  eleventyConfig.addFilter("toDateObj", require("./filters/toDateObj"));
  eleventyConfig.addFilter("JSONStringify", require("./filters/json"));

  eleventyConfig.addShortcode(
    "renderMarkdown",
    require("./shortcodes/markdown")
  );
  eleventyConfig.addShortcode(
    "responsiveImage",
    require("./shortcodes/responsiveImage")
  );
};
