const unified = require("unified");
const markdown = require("remark-parse");
const externalLinks = require("remark-external-links");
const slug = require("remark-slug");
const footnotes = require("remark-footnotes");
const html = require("remark-html");
const all = require("mdast-util-to-hast/lib/all");
const customFootnotes = require("../helpers/footnotes");
const references = require("../helpers/references");
const imagesWithCaptions = require("../helpers/imagesWithCaptions");

const findByID = require("../filters/findByID");
const responsiveImage = require("./responsiveImage");

module.exports = function renderMarkdown(rawMarkdown, assets) {
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
      sanitize: false,
      handlers: {
        sectionWithFootnotes: (h, node) =>
          h(node, "section", { class: "with-footnotes" }, all(h, node)),
        customFootnoteDefinition: (h, node) => {
          const id = `fn-${node.identifier}`;
          return h(node, "aside", { id, class: "small-text" }, all(h, node));
        },
        footnoteTitle: (h, node) =>
          h(
            node,
            "strong",
            { class: "footnote-title | tertiary-text" },
            all(h, node)
          ),
        footnoteBacklink: (h, node) =>
          h(
            node,
            "a",
            { href: node.url, class: "footnote-backlink | tertiary-text" },
            all(h, node)
          ),
        footnoteImage: (h, node) => {
          const imageID = node.url.split("/")[4];
          const imageObject = findByID(assets, imageID);
          const imageAttrs = responsiveImage(imageObject, "oneCol", true);
          return h(node, "img", { ...imageAttrs }, all(h, node));
        },
        imageContainer: (h, node) =>
          h(node, "section", { class: "figure | columns" }, all(h, node)),
        imageWrapper: (h, node) =>
          h(node, "div", { class: "grayscale-image" }, all(h, node)),
        figcaption: (h, node) =>
          h(
            node,
            "figcaption",
            { class: "caption | small-text | measure" },
            all(h, node)
          ),
        list: (h, node) => {
          const isLong =
            node.children.length >= 10 &&
            node.children[0].children[0].children.length < 2;

          const element = node.ordered ? "ol" : "ul";
          return h(
            node,
            element,
            { class: isLong ? "long-list" : "" },
            all(h, node)
          );
        },
        image: (h, node) => {
          const imageID = node.url.split("/")[4];
          const imageObject = findByID(assets, imageID);
          const imageAttrs = responsiveImage(
            imageObject,
            "threeQuarters",
            true
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
