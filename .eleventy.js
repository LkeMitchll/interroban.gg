require("dotenv").config();

module.exports = function (eleventyConfig) {
  const config = { htmlTemplateEngine: "njk" };

  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addWatchTarget("assets/**/*.css");

  eleventyConfig.addFilter("findByID", require("./filters/findByID"));
  eleventyConfig.addFilter("limit", require("./filters/limit"));
  eleventyConfig.addFilter("formatDate", require("./filters/date"));

  eleventyConfig.addShortcode(
    "renderMarkdown",
    require("./shortcodes/markdown")
  );

  return config;
};
