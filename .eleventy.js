require("dotenv").config();

const pluginRSS = require("@11ty/eleventy-plugin-rss");
const pluginReadingTime = require("eleventy-plugin-reading-time");
const findByID = require("./filters/findByID");
const limit = require("./filters/limit");
const date = require("./filters/date");
const markdown = require("./shortcodes/markdown");
const responsiveImage = require("./shortcodes/responsiveImage");
const postcss = require("postcss");
const importPlugin = require("postcss-import");
const autoprefixerPlugin = require("autoprefixer");
const nanoPlugin = require("cssnano");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.addPlugin(pluginReadingTime);

  eleventyConfig.addPassthroughCopy("./assets/fonts");
  eleventyConfig.addPassthroughCopy("./assets/images");
  eleventyConfig.addPassthroughCopy("./components/*.js");
  eleventyConfig.addWatchTarget("./css/");

  eleventyConfig.addFilter("findByID", findByID);
  eleventyConfig.addFilter("limit", limit);
  eleventyConfig.addFilter("formatDate", date);

  eleventyConfig.addShortcode("renderMarkdown", markdown);
  eleventyConfig.addShortcode("responsiveImage", responsiveImage);

  eleventyConfig.addTemplateFormats("pcss");
  eleventyConfig.addExtension("pcss", {
    outputFileExtension: "css",

    compile: async function (inputContent, inputPath) {
      let result = await postcss([importPlugin, autoprefixerPlugin, nanoPlugin])
        .process(inputContent, { from: inputPath })
        .then((result) => result.css);

      return async () => {
        return result;
      };
    },
  });

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
