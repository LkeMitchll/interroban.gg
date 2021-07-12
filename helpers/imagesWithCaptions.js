const visit = require("unist-util-visit");
const unified = require("unified");
const markdown = require("remark-parse");

module.exports = function imagesWithCaptions() {
  function transformer(tree) {
    function visitor(node, _, parentNode) {
      // rename the node type
      parentNode.type = "imageWrapper";
      // if the image has a title, add it as a sibling
      if (node.title) {
        // convert to MDAST, parse
        const captionTree = unified().use(markdown).parse(node.title);
        const caption = {
          type: "figcaption",
          children: captionTree.children,
        };
        parentNode.children.push(caption);
      }
    }

    visit(tree, "image", visitor);
  }

  return transformer;
};
