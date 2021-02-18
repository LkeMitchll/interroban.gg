const visit = require("unist-util-visit");

module.exports = function customTOC() {
  function transformer(tree) {
    function headingVisitor(currentNode, index, parent) {
      const result = currentNode.children.filter(
        (child) => child.value === "Table of Contents",
      );

      if (result.length > 0) {
        const list = parent.children[index + 1];
        parent.children.splice(index, 2);
        const tocNode = {
          type: "TOC",
          children: [],
        };
        tocNode.children.push(currentNode);
        tocNode.children.push(list);
        parent.children.unshift(tocNode);
      }
    }

    visit(tree, "heading", headingVisitor);
  }
  return transformer;
};
