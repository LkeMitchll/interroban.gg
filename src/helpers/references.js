const visit = require("unist-util-visit");

module.exports = function referenceLinks() {
  function transformer(tree) {
    const title = {
      type: "heading",
      depth: 3,
      children: [{ type: "text", value: "References" }],
    };
    const links = {
      type: "list",
      ordered: true,
      children: [],
    };
    function constructLink(node) {
      const listItem = {
        type: "listItem",
        children: [
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                value: `${node.title} `,
              },
              {
                type: "link",
                url: node.url,
                children: [{ type: "text", value: "→" }],
              },
            ],
          },
        ],
      };
      links.children.push(listItem);
    }

    function visitor(currentNode) {
      if (currentNode.title) {
        constructLink(currentNode);
      }
    }

    visit(tree, "link", visitor);
    visit(tree, "definition", visitor);

    if (links.children.length) {
      tree.children.push({ type: "thematicBreak" });
      tree.children.push(title);
      tree.children.push(links);
    }
  }

  return transformer;
};
