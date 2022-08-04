// Setup .env file
require("dotenv").config();

module.exports = function (eleventy) {
  // Eleventy plugins
  const pluginRSS = require("@11ty/eleventy-plugin-rss");
  const pluginReadingTime = require("eleventy-plugin-reading-time");
  eleventy.addPlugin(pluginRSS);
  eleventy.addPlugin(pluginReadingTime);

  // Passthrough copying
  eleventy.addPassthroughCopy("src/assets/fonts");
  eleventy.addPassthroughCopy("src/assets/images");
  eleventy.addPassthroughCopy("src/components/*.js");
  eleventy.addWatchTarget("src/css/");

  // Custom filters
  const date = require("./src/_filters/date");
  const stars = require("./src/_filters/stars");
  const depaginate = require("./src/_filters/dePaginated");
  eleventy.addFilter("formatDate", date);
  eleventy.addFilter("starRating", stars);
  eleventy.addFilter("dePaginate", depaginate);

  // Custom shortcodes
  const responsiveImage = require("./src/_shortcodes/responsiveImage");
  eleventy.addAsyncShortcode("image", responsiveImage);

  const md = require("markdown-it");
  eleventy.addPairedShortcode("sidenote", (content, number) => {
    const result = md({ html: true }).render(content);
    return `<aside id="sn-${number}" class="sidenote">
              <div class="sidenote__content">
                <small>
                  ${result}
                </small>
              </div>
            </aside>`;
  });

  // Custom markdown renderer
  const namedHeadingsPlugin = require("markdown-it-named-headings");
  const classesPlugin = require("@toycode/markdown-it-class");
  const externalLinksPlugin = require("markdown-it-external-links");
  eleventy.amendLibrary("md", (mdLib) =>
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

  // Options
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
