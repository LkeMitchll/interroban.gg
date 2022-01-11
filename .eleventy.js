require("dotenv").config();

const pluginRSS = require("@11ty/eleventy-plugin-rss");
const pluginReadingTime = require("eleventy-plugin-reading-time");
const findByID = require("./src/filters/findByID");
const limit = require("./src/filters/limit");
const date = require("./src/filters/date");
const markdown = require("./src/shortcodes/markdown");
const responsiveImage = require("./src/shortcodes/responsiveImage");
const postcss = require("postcss");
const importPlugin = require("postcss-import");
const autoprefixerPlugin = require("autoprefixer");
const nanoPlugin = require("cssnano");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.addPlugin(pluginReadingTime);

  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/components/*.js");
  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addFilter("findByID", findByID);
  eleventyConfig.addFilter("limit", limit);
  eleventyConfig.addFilter("formatDate", date);

  eleventyConfig.addShortcode("renderMarkdown", markdown);
  eleventyConfig.addShortcode("responsiveImage", responsiveImage);

  // PostCSS comile via .pcss file extension
  eleventyConfig.addTemplateFormats("pcss");
  eleventyConfig.addExtension("pcss", {
    outputFileExtension: "css",

    compile: async function (inputContent, inputPath) {
      let plugins = [importPlugin, autoprefixerPlugin, nanoPlugin];
      let result = await postcss(plugins)
        .process(inputContent, { from: inputPath })
        .then((result) => result.css);

      return async () => {
        return result;
      };
    },
  });

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
