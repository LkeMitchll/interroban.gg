import visit from "unist-util-visit";
import unified from "unified";
import markdown from "remark-parse";

const imagesWithCaptions = () => {
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

export default imagesWithCaptions;
