const markdownIt = require("markdown-it");
const modifyTokenPlugin = require("markdown-it-modify-token");
const sidenotePlugin = require("markdown-it-footnote-here");
const namedHeadingsPlugin = require("markdown-it-named-headings");
const externalLinksPlugin = require("markdown-it-external-links");
const Token = require("markdown-it/lib/token");

const findByID = require("../_filters/findByID");
const responsiveImage = require("../_shortcodes/responsiveImage");

function containsSidenote(token) {
  return (
    token.children &&
    token.children.some((child) => child.type === "footnote_ref")
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
    "inline",
    "sidenote_image",
    function replace(state) {
      const { tokens } = state;

      tokens.forEach((token, id) => {
        if (token.type === "footnote_open") {
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
    "inline",
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
          if (token.type === "footnote_close") {
            newState.push(wrapperClose);
          }
          newState.push(wrapperOpen);
        } else if (token.type === "footnote_close") {
          newState.push(wrapperClose);
        }
      });

      state.tokens = newState;
    }
  );

  // Add custom number and backlink
  markdownLib.core.ruler.after(
    "sidenote_wrapper",
    "sidenote_label",
    function replace(state) {
      const { tokens } = state;

      tokens.forEach((token, id) => {
        if (token.type === "footnote_open") {
          const sidenoteID = token.meta.label;
          const { children } = tokens[id + 2];

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

          const linkOpen = new Token("link_open", "a", 1);
          const linkClose = new Token("link_close", "a", -1);
          const linkContent = new Token("text", "", 0);
          linkOpen.attrs = [
            ["href", `#fn${sidenoteID}`],
            ["class", "sidenote-backlink | tertiary-text"],
          ];
          linkContent.content = "↩";
          const link = [linkOpen, linkContent, linkClose];

          children.push(...link);
        }
      });
    }
  );

  // Customise sidenote reference link
  markdownLib.renderer.rules.footnote_ref = (tokens, idx) => {
    const token = tokens[idx];
    const id = token.meta.id + 1;
    return `<sup id="fnref${id}"><a href="#fn${id}" class="sidenote-ref">${id}</a></sup>`;
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
                <figcaption class="caption | measure">
                  <small>
                    ${imageObject.fields.description}
                  </small>
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
