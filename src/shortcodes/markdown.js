import unified from "unified";
import markdown from "remark-parse";
import externalLinks from "remark-external-links";
import slug from "remark-slug";
import footnotes from "remark-footnotes";
import html from "remark-html";
import all from "mdast-util-to-hast/lib/all";
import customFootnotes from "../helpers/footnotes";
import references from "../helpers/references";
import imagesWithCaptions from "../helpers/imagesWithCaptions";

import findByID from "../filters/findByID";
import responsiveImage from "./responsiveImage";

const renderMarkdown = (rawMarkdown, assets) => {
  let result;
  unified()
    .use(markdown)
    .use(slug)
    .use(footnotes)
    .use(customFootnotes)
    .use(imagesWithCaptions)
    .use(references)
    .use(externalLinks)
    .use(html, {
      handlers: {
        sectionWithFootnotes: (h, node) => h(node, "section", all(h, node)),
        customFootnoteDefinition: (h, node) => {
          const id = `fn-${node.identifier}`;
          return h(node, "aside", { id }, all(h, node));
        },
        footnoteImage: (h, node) => {
          const imageID = node.url.split("/")[4];
          const imageObject = findByID(assets, imageID);
          const imageAttrs = responsiveImage(imageObject, "oneCol", true);
          return h(node, "img", { ...imageAttrs }, all(h, node));
        },
        imageWrapper: (h, node) => h(node, "section", all(h, node)),
        figcaption: (h, node) => h(node, "figcaption", { class: "small-text" }, all(h, node)),
        image: (h, node) => {
          const imageID = node.url.split("/")[4];
          const imageObject = findByID(assets, imageID);
          const imageAttrs = responsiveImage(
            imageObject,
            "threeQuarters",
            true,
          );
          return h(node, "img", { ...imageAttrs }, all(h, node));
        },
      },
    })
    .process(rawMarkdown, (err, output) => {
      if (err) throw err;
      result = output.contents;
    });

  return result;
};

export default renderMarkdown;
