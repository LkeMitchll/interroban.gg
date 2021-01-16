import { FixMe } from "services/contentful.types";
import type { Node, Parent } from "unist";
import visit from "unist-util-visit";

export const customFootnotes = () => (tree: Node): void => {
  const footnoteDefs = {};
  visit(tree, "footnoteDefinition", function (
    node: FixMe,
    index: number,
    parent: Parent
  ) {
    const indentifier = {
      type: "strong",
      children: [{ type: "text", value: `${node.identifier} ` }],
    };
    const backlink = {
      type: "link",
      backRef: true,
      title: null,
      url: `#ref_${node.identifier}`,
      children: [{ type: "text", value: "↩" }],
    };
    // remove definition from original position in tree
    parent.children.splice(index, 1);
    // save foonote definitions for later
    footnoteDefs[node.identifier as string] = node;
    // replace first-level paragraph with it's children
    node.children.splice(0, 1, ...node.children[0].children);
    // add indentifier name
    node.children[1].children.unshift(indentifier);
    // add a backlink to the reference
    node.children[1].children.push(backlink);

    return [visit.SKIP, index];
  });

  visit(tree, "footnoteReference", function (node, _, parent) {
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
    parent.children.push(footnoteDefs[node.identifier as string]);
  });
};
