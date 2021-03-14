const unified = require("unified");
const markdown = require("remark-parse");
const externalLinks = require("remark-external-links");
const toc = require("remark-toc");
const slug = require("remark-slug");
const footnotes = require("remark-footnotes");
const html = require("remark-html");
const all = require("mdast-util-to-hast/lib/all");
const customFootnotes = require("../helpers/footnotes");
const customTOC = require("../helpers/toc");

const findByID = require("../filters/findByID");
const responsiveImage = require("./responsiveImage");

module.exports = function renderMarkdown(rawMarkdown, assets) {
  let result;
  unified()
    .use(markdown)
    .use(externalLinks)
    .use(toc, { ordered: true, maxDepth: 2 })
    .use(customTOC)
    .use(slug)
    .use(footnotes)
    .use(customFootnotes)
    .use(html, {
      handlers: {
        TOC: (h, node) => h(node, "nav", all(h, node)),
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
