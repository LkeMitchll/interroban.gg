var visit = require("unist-util-visit");

module.exports = customFootnotes;

function customFootnotes() {
  return transformer;

  function transformer(tree) {
    const footnoteDefs = {};
    visit(tree, "footnoteDefinition", definitionVisitor);

    function definitionVisitor(node, index, parent) {
      const indentifier = {
        type: "strong",
        children: [{ type: "text", value: `${node.identifier} ` }],
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

    visit(tree, "footnoteReference", referenceVisitor);

    function referenceVisitor(node, index, parent) {
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
  }
}
