import { config } from "dotenv";
import pluginRSS from "@11ty/eleventy-plugin-rss";
import pluginReadingTime from "eleventy-plugin-reading-time";
import findByID from "./src/filters/findByID";
import limit from "./src/filters/limit";
import date from "./src/filters/date";
import JsonStringify from "./src/filters/json";
import markdown from "./src/shortcodes/markdown";
import responsiveImage from "./src/shortcodes/responsiveImage";
import breadcrumb from './src/shortcodes/breadcrumb';

config();

const siteConfig = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.addPlugin(pluginReadingTime);

  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addWatchTarget("./src/assets/**/*.css");

  eleventyConfig.addFilter("findByID", findByID);
  eleventyConfig.addFilter("limit", limit);
  eleventyConfig.addFilter("formatDate", date);
  eleventyConfig.addFilter("JSONStringify", JsonStringify);

  eleventyConfig.addShortcode("renderMarkdown", markdown);
  eleventyConfig.addShortcode("responsiveImage", responsiveImage);
  eleventyConfig.addShortcode("breadcrumb", breadcrumb);

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    },
  };
};

export default siteConfig;
