const visit = require("unist-util-visit");

module.exports = function customFootnotes() {
  function transformer(tree) {
    const footnoteDefs = {};

    function definitionVisitor(currentNode, index, parent) {
      const node = currentNode;
      const indentifier = {
        type: "strong",
        children: [{ type: "text", value: `${node.identifier} ` }],
      };
      const backlink = {
        type: "link",
        backRef: true,
        title: null,
        url: `#fnref-${node.identifier}`,
        children: [{ type: "text", value: "↩" }],
      };
      // rename the node type
      node.type = "customFootnoteDefinition";
      // remove definition from original position in tree
      parent.children.splice(index, 1);
      // save foonote definitions for later
      footnoteDefs[node.identifier] = node;
      // replace first-level paragraph with it's children
      node.children.splice(0, 1, ...node.children[0].children);
      // add indentifier name
      node.children[1].children.unshift(indentifier);
      // add a backlink to the reference
      node.children[1].children.push(backlink);

      return [visit.SKIP, index];
    }

    function referenceVisitor(node, _, parentNode) {
      const parent = parentNode;
      // rename the node type
      parent.type = "sectionWithFootnotes";
      // collect existing children into a paragraph
      const existingChildren = parent.children;
      parent.children = [
        {
          type: "paragraph",
          children: existingChildren,
          position: parent.position,
        },
      ];
      // add the relevant footnote definition
      parent.children.push(footnoteDefs[node.identifier]);
    }

    visit(tree, "footnoteDefinition", definitionVisitor);
    visit(tree, "footnoteReference", referenceVisitor);
  }

  return transformer;
};
