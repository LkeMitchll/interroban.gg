const unified = require("unified");
const markdown = require("remark-parse");
const footnotes = require("remark-footnotes");
const html = require("remark-html");
const all = require("mdast-util-to-hast/lib/all");
const customFootnotes = require("../helpers/footnotes");

module.exports = function renderMarkdown(rawMarkdown) {
  let result;
  unified()
    .use(markdown)
    .use(footnotes)
    .use(customFootnotes)
    .use(html, {
      handlers: {
        sectionWithFootnotes: (h, node) => h(node, "section", all(h, node)),
        customFootnoteDefinition: (h, node) => {
          const id = `fn-${node.identifier}`;
          return h(node, "aside", { id }, all(h, node));
        },
      },
    })
    .process(rawMarkdown, (err, output) => {
      if (err) throw err;
      result = output.contents;
    });

  return result;
};
