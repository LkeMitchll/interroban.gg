require("dotenv").config();

var unified = require("unified");
var markdown = require("remark-parse");
var footnotes = require("remark-footnotes");
var customFootnotes = require("./helpers/footnotes");
var html = require("remark-html");
var all = require("mdast-util-to-hast/lib/all");

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("renderMarkdown", (rawMarkdown) => {
    let result;
    unified()
      .use(markdown)
      .use(footnotes)
      .use(customFootnotes)
      .use(html, {
        handlers: {
          sectionWithFootnotes: (h, node) => {
            return h(node, "section", all(h, node));
          },
          customFootnoteDefinition: (h, node) => {
            return h(
              node,
              "aside",
              { id: "fn-" + node.identifier },
              all(h, node)
            );
          },
        },
      })
      .process(rawMarkdown, function (err, output) {
        if (err) throw err;
        result = output;
      });

    return result;
  });
};
