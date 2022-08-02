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

  const date = require("./src/_filters/date");
  const stars = require("./src/_filters/stars");
  const depaginate = require("./src/_filters/dePaginated");
  eleventyConfig.addFilter("formatDate", date);
  eleventyConfig.addFilter("starRating", stars);
  eleventyConfig.addFilter("dePaginate", depaginate);

  const responsiveImage = require("./src/_shortcodes/responsiveImage");
  eleventyConfig.addAsyncShortcode("image", responsiveImage);

  const md = require("markdown-it");
  eleventyConfig.addPairedShortcode("sidenote", (content, number) => {
    const result = md({ html: true }).render(content);
    return `<aside id="sn-${number}" class="sidenote">
              <div class="sidenote__content">
                <small>
                  ${result}
                </small>
              </div>
            </aside>`;
  });

  const namedHeadingsPlugin = require("markdown-it-named-headings");
  const classesPlugin = require("@toycode/markdown-it-class");
  const externalLinksPlugin = require("markdown-it-external-links");
  eleventyConfig.amendLibrary("md", (mdLib) =>
    mdLib
      .use(namedHeadingsPlugin)
      .use(classesPlugin, { h2: "title", h3: "subtitle" })
      .use(externalLinksPlugin, {
        externalClassName: null,
        externalTarget: "_blank",
        externalRel: "nofollow noopener noreferrer",
        internalDomains: ["interroban.gg", "localhost"],
      })
  );

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
