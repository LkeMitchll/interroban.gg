const visit = require("unist-util-visit");

module.exports = function customFootnotes() {
  function transformer(tree) {
    const footnoteDefs = {};

    function definitionVisitor(currentNode, index, parent) {
      const node = currentNode;
      const footnoteContainsImage = node.children.filter(
        (child) => child.children[0].type === "image"
      );
      node.children.forEach((child) => {
        if (child.children[0].type === "image") {
          child.children[0].type = "footnoteImage";
        }
      });

      const identifier = {
        type: "footnoteTitle",
        children: [{ type: "text", value: `Nº${node.identifier} ` }],
      };
      const backlink = {
        type: "footnoteBacklink",
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
      if (footnoteContainsImage.length > 0) {
        const image = node.children[0];
        node.children[0] = { type: "imageWrapper", children: [image] };
        // add identifier name
        node.children[1].children.unshift(identifier);
        // add a backlink to the reference
        node.children[1].children.push(backlink);
      } else {
        node.children = [{ type: "paragraph", children: node.children }];
        // add identifier name
        node.children[0].children.unshift(identifier);
        // add a backlink to the reference
        node.children[0].children.push(backlink);
      }

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
