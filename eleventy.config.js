import "dotenv/config";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import lightningCSSPlugin from "@11tyrocks/eleventy-plugin-lightningcss";
import RSSPlugin from "@11ty/eleventy-plugin-rss";
import markdownIt from "markdown-it";
import mdAnchor from "markdown-it-anchor";
import starFilter from "./src/_filters/stars.js";
import responsiveImage from "./src/_shortcodes/image.js";
import breadcrumbs from "./src/_shortcodes/breadcrumbs.js";

const config = (eleventy) => {
  // Markdown config
  const mdOptions = { html: true, typographer: true };
  const md = markdownIt(mdOptions).use(mdAnchor);
  eleventy.setLibrary("md", md);

  // Ignore gitignore
  eleventy.setUseGitIgnore(false);
  // Manually copy files
  eleventy.addPassthroughCopy("src/assets/");

  // Eleventy plugins
  eleventy.addPlugin(EleventyRenderPlugin);
  eleventy.addPlugin(lightningCSSPlugin);
  eleventy.addPlugin(RSSPlugin);

  // Custom filters
  eleventy.addFilter("starRating", starFilter);

  // Custom shortcodes
  eleventy.addAsyncShortcode("image", responsiveImage);
  eleventy.addShortcode("breadcrumbs", breadcrumbs);
  eleventy.addPairedShortcode("sidenote", (content, number) => {
    const result = md.render(content);
    return `<aside id="sn-${number}" class="sidenote" data-numerals="lining">
              <small class="flow">${result}</small>
            </aside>`;
  });


  // Options
  return {
    dir: { input: "src" },
  };
};

export default config;
