require("dotenv").config();

module.exports = function (eleventyConfig) {
  const pluginRSS = require("@11ty/eleventy-plugin-rss");
  const pluginReadingTime = require("eleventy-plugin-reading-time");
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.addPlugin(pluginReadingTime);

  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/components/*.js");
  eleventyConfig.addWatchTarget("src/css/");

  const findByID = require("./src/_filters/findByID");
  const date = require("./src/_filters/date");
  eleventyConfig.addFilter("findByID", findByID);
  eleventyConfig.addFilter("formatDate", date);

  const responsiveImage = require("./src/_shortcodes/responsiveImage");
  const markdown = require("./src/_shortcodes/markdown");
  eleventyConfig.addShortcode("image", responsiveImage);
  eleventyConfig.addShortcode("markdown", markdown);

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
