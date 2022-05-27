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
  const stars = require("./src/_filters/stars");
  const depaginate = require("./src/_filters/dePaginated");
  eleventyConfig.addFilter("findByID", findByID);
  eleventyConfig.addFilter("formatDate", date);
  eleventyConfig.addFilter("starRating", stars);
  eleventyConfig.addFilter("dePaginate", depaginate);

  const responsiveImage = require("./src/_shortcodes/responsiveImage");
  const markdown = require("./src/_parsers/markdown");
  eleventyConfig.addShortcode("image", responsiveImage);

  eleventyConfig.addExtension("md", {
    compile: async function (inputContent) {
      const assets = await require("./src/_data/assets")();
      return function () {
        return markdown(inputContent, assets);
      };
    },
  });

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
