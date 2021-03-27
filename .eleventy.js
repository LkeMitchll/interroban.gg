require("dotenv").config();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));
  eleventyConfig.addPlugin(require("eleventy-plugin-reading-time"));

  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addWatchTarget("./src/assets/**/*.css");

  eleventyConfig.addFilter("findByID", require("./src/filters/findByID"));
  eleventyConfig.addFilter("limit", require("./src/filters/limit"));
  eleventyConfig.addFilter("formatDate", require("./src/filters/date"));
  eleventyConfig.addFilter("JSONStringify", require("./src/filters/json"));

  eleventyConfig.addShortcode(
    "renderMarkdown",
    require("./src/shortcodes/markdown")
  );
  eleventyConfig.addShortcode(
    "responsiveImage",
    require("./src/shortcodes/responsiveImage")
  );

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
