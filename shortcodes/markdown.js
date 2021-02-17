const unified = require("unified");
const markdown = require("remark-parse");
const externalLinks = require("remark-external-links");
const footnotes = require("remark-footnotes");
const html = require("remark-html");
const all = require("mdast-util-to-hast/lib/all");
const customFootnotes = require("../helpers/footnotes");

const findByID = require("../filters/findByID");
const responsiveImage = require("./responsiveImage");

module.exports = function renderMarkdown(rawMarkdown, assets) {
  let result;
  unified()
    .use(markdown)
    .use(externalLinks)
    .use(footnotes)
    .use(customFootnotes)
    .use(html, {
      handlers: {
        abbr: null,
        sectionWithFootnotes: (h, node) => h(node, "section", all(h, node)),
        customFootnoteDefinition: (h, node) => {
          const id = `fn-${node.identifier}`;
          return h(node, "aside", { id }, all(h, node));
        },
        image: (h, node) => {
          const imageID = node.url.split("/")[4];
          const imageObject = findByID(assets, imageID);
          const imageAttrs = responsiveImage(imageObject, "oneCol", true);
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
