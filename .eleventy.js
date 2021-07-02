require("dotenv").config();
const pluginRSS = require("@11ty/eleventy-plugin-rss");
const pluginReadingTime = require("eleventy-plugin-reading-time");
const findByID = require("./src/filters/findByID");
const limit = require("./src/filters/limit");
const date = require("./src/filters/date");
const JsonStringify = require("./src/filters/json");
const markdown = require("./src/shortcodes/markdown");
const responsiveImage = require("./src/shortcodes/responsiveImage");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.addPlugin(pluginReadingTime);

  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addWatchTarget("./src/css/**/*.css");

  eleventyConfig.addFilter("findByID", findByID);
  eleventyConfig.addFilter("limit", limit);
  eleventyConfig.addFilter("formatDate", date);
  eleventyConfig.addFilter("JSONStringify", JsonStringify);

  eleventyConfig.addShortcode("renderMarkdown", markdown);
  eleventyConfig.addShortcode("responsiveImage", responsiveImage);

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};
