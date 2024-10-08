import "dotenv/config";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import lightningCSSPlugin from "@11tyrocks/eleventy-plugin-lightningcss";
import RSSPlugin from "@11ty/eleventy-plugin-rss";
import WebMentionsPlugin from "eleventy-plugin-webmentions";
import markdownIt from "markdown-it";
import mdAnchor from "markdown-it-anchor";
import starFilter from "./src/_filters/stars.js";
import responsiveImage from "./src/_shortcodes/image.js";

const config = (eleventy) => {
  // Manually copy files
  eleventy.addPassthroughCopy("src/assets/");
  eleventy.addPassthroughCopy({
    "node_modules/@appnest/masonry-layout/umd/masonry-layout.min.js":
      "vendor/masonry-layout.min.js",
  });

  // Eleventy plugins
  eleventy.addPlugin(EleventyRenderPlugin);
  eleventy.addPlugin(lightningCSSPlugin);
  eleventy.addPlugin(WebMentionsPlugin, {
    domain: "interroban.gg",
    token: process.env.WEBMENTIONIO_TOKEN,
  });
  eleventy.addPlugin(RSSPlugin);

  // Custom filters
  eleventy.addFilter("starRating", starFilter);

  // Custom shortcodes
  eleventy.addAsyncShortcode("image", responsiveImage);

  // Markdown config
  const mdOptions = { html: true, typographer: true };
  const md = markdownIt(mdOptions).use(mdAnchor);

  eleventy.setLibrary("md", md);

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
