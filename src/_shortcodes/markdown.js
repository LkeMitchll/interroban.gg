const markdownIt = require("markdown-it");
const modifyTokenPlugin = require("markdown-it-modify-token");
const sidenotePlugin = require("markdown-it-sidenote");
const namedHeadingsPlugin = require("markdown-it-named-headings");
const externalLinksPlugin = require("markdown-it-external-links");
const Token = require("markdown-it/lib/token");

const findByID = require("../_filters/findByID");
const responsiveImage = require("./responsiveImage");

function containsSidenote(token) {
  return (
    token.children &&
    token.children.some((child) => child.type === "sidenote_ref")
  );
}

module.exports = function renderMarkdown(rawMarkdown, assets) {
  const markdownLib = markdownIt({
    modifyToken: (token) => {
      const level = token.tag;
      switch (token.type) {
        case "heading_open":
          switch (level) {
            case "h2":
              token.attrObj.class = "title";
              break;
            case "h3":
              token.attrObj.class = "subtitle";
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    },
  })
    .use(modifyTokenPlugin)
    .use(sidenotePlugin)
    .use(namedHeadingsPlugin)
    .use(externalLinksPlugin, {
      externalClassName: null,
      externalTarget: "_blank",
      externalRel: "nofollow noopener noreferrer",
      internalDomains: ["interroban.gg", "localhost"],
    });

  // Pop sidenote images out of paragraph tags
  markdownLib.core.ruler.after(
    "sidenote_tail",
    "sidenote_image",
    function replace(state) {
      const { tokens } = state;

      tokens.forEach((token, id) => {
        if (token.type === "sidenote_open") {
          const content = tokens[id + 2];
          if (content.children[0].type === "image") {
            // pop image out of stack
            const image = content.children.reverse().pop();
            content.children.reverse();
            // re-insert image back into stack
            tokens.splice(id + 1, 0, image);
          }
        }
      });
    }
  );

  // Wrap sidenotes with a <section>
  markdownLib.core.ruler.after(
    "sidenote_tail",
    "sidenote_wrapper",
    function replace(state) {
      const { tokens } = state;
      const newState = [];

      const wrapperOpen = new Token("sidenote_wrapper_open", "section", 1);
      const wrapperClose = new Token("sidenote_wrapper_close", "section", -1);
      wrapperOpen.attrs = [["class", "with-sidenotes"]];

      // Wrapper: Find tokens before sidenote-ref containing tokens
      tokens.forEach((token, id) => {
        if (containsSidenote(token)) {
          tokens[id - 2].meta = { sidenote_wrapper_open_after: true };
        }
      });

      // Wrapper: Add opening and closing wrapper tokens
      tokens.forEach((token) => {
        newState.push(token);

        if (token.meta && token.meta.sidenote_wrapper_open_after) {
          // If another sidenote section follows this one.
          if (token.type === "sidenote_close") {
            newState.push(wrapperClose);
          }
          newState.push(wrapperOpen);
        } else if (token.type === "sidenote_close") {
          newState.push(wrapperClose);
        }
      });

      state.tokens = newState;
    }
  );

  // Add "No.x" label to sidenote content
  markdownLib.core.ruler.after(
    "sidenote_wrapper",
    "sidenote_label",
    function replace(state) {
      const { tokens } = state;

      tokens.forEach((token, id) => {
        if (token.type === "sidenote_anchor") {
          const sidenoteID = token.meta.id + 1;
          const { children } = tokens[id - 1];

          // Build the label tokens
          const labelOpen = new Token("strong_open", "strong", 1);
          const labelClose = new Token("strong_close", "strong", -1);
          const labelContent = new Token("text", "", 0);
          labelOpen.attrs = [["class", "sidenote-title | tertiary-text"]];
          labelContent.content = `Nº${sidenoteID} `;
          const label = [labelOpen, labelContent, labelClose];

          // Insert the tokens after images
          if (children[0].type === "image") {
            children.splice(1, 0, ...label);
          } else {
            children.splice(0, 0, ...label);
          }
        }
      });
    }
  );

  // Customise sidenote reference link
  markdownLib.renderer.rules.sidenote_ref = (tokens, idx) => {
    const token = tokens[idx];
    const id = token.meta.id + 1;
    return `<sup id="fnref${id}"><a href="#fn${id}" class="sidenote-ref">${id}</a></sup>`;
  };

  // Customise sidenote backlink
  markdownLib.renderer.rules.sidenote_anchor = (tokens, idx) => {
    const token = tokens[idx];
    const id = token.meta.id + 1;
    return `<a href="#fnref${id}" class="sidenote-backlink | tertiary-text">↩</a>`;
  };

  // Custom image rendering
  markdownLib.renderer.rules.image = (tokens, idx) => {
    const token = tokens[idx];
    const aIndex = token.attrIndex("src");
    const src = token.attrs[aIndex][1];
    const imageID = src.split("/")[4];
    const imageObject = findByID(assets, imageID);

    // Render block level images with captions
    if (tokens.length < 2) {
      return `<figure class="figure | columns">
                <div class="grayscale-image">
                  ${responsiveImage(imageObject, "threeQuarters")}
                </div>
                <figcaption class="caption | small-text | measure">
                  ${imageObject.fields.description}
                </figcaption>
              </figure>`;
    }

    // Render sidenote images as grayscale
    return `<div class="grayscale-image">
              ${responsiveImage(imageObject, "oneCol")}
            </div>`;
  };

  return markdownLib.render(rawMarkdown);
};