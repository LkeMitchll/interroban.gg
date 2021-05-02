import visit from "unist-util-visit";

const referenceLinks = () => {
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

    function visitor(currentNode) {
      if (currentNode.title) {
        const listItem = {
          type: "listItem",
          children: [
            {
              type: "paragraph",
              children: [
                {
                  type: "text",
                  value: `${currentNode.title} `,
                },
                {
                  type: "link",
                  url: currentNode.url,
                  children: [{ type: "text", value: "→" }],
                },
              ],
            },
          ],
        };
        links.children.push(listItem);
      }
    }

    visit(tree, "link", visitor);
    if (links.children.length) {
      tree.children.push({ type: "thematicBreak" });
      tree.children.push(title);
      tree.children.push(links);
    }
  }

  return transformer;
};

export default referenceLinks;
