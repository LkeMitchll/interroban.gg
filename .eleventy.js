require("dotenv").config();

const pluginRSS = require("@11ty/eleventy-plugin-rss");
const pluginReadingTime = require("eleventy-plugin-reading-time");
const findByID = require("./src/_filters/findByID");
const date = require("./src/_filters/date");
const markdown = require("./src/_shortcodes/markdown");
const responsiveImage = require("./src/_shortcodes/responsiveImage");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.addPlugin(pluginReadingTime);

  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/components/*.js");
  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addFilter("findByID", findByID);
  eleventyConfig.addFilter("formatDate", date);

  eleventyConfig.addShortcode("markdown", markdown);
  eleventyConfig.addShortcode("image", responsiveImage);

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
