import { ReactNode } from "react";
import {
  BLOCKS,
  INLINES,
  Inline,
  Document,
  Paragraph,
  Hyperlink,
} from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { styled } from "tokens";
import { P, Small, Image, A, Footnote } from "designSystem";

type RichTextProps = {
  source?: Document;
};

const Content = styled("div", {
  display: "grid",
  gridGap: "$2",
  position: "relative",

  variants: {
    layout: {
      small: {
        gridTemplate: `"c c c c" auto / 1fr 1fr 1fr 1fr`,
      },
      footNoteRight: {
        gridTemplate: `". c c f" auto / 1fr 1fr 1fr 1fr`,
      },
      footNoteLeft: {
        gridTemplate: `"f c c ." auto / 1fr 1fr 1fr 1fr`,
      },
    },
  },
});

function footnote(node: Inline): ReactNode {
  const content = node.data.target.fields.content;
  const image = node.data.target.fields?.image?.fields;

  const footnoteOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_: Paragraph, children: any) => {
        return (
          <>
            <Image
              src={image.file.url as string}
              alt={image.description as string}
              css={{ marginBottom: "$0" }}
            />
            <Small>Image: {children}</Small>
          </>
        );
      },
      [INLINES.HYPERLINK]: (node: Hyperlink, children: any) => {
        return (
          <A href={node.data.uri} css={{ fontSize: "$3" }}>
            {children}
          </A>
        );
      },
    },
  };
  return (
    <Footnote position={{ initial: "below", bp3: "aside" }}>
      {documentToReactComponents(content, footnoteOptions)}
    </Footnote>
  );
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Paragraph, children: any) => {
      const footnotes = [];
      let footnoteLeft = true;

      node.content.map((child, i) => {
        if (child.nodeType == "embedded-entry-inline") {
          footnotes.push(children[i]);
          footnoteLeft = child.data.target.fields.layout;
          children.splice(i, 1);
        }
      });
      return (
        <Content
          layout={{
            initial: "small",
            bp3: footnoteLeft ? "footNoteLeft" : "footNoteRight",
          }}
        >
          <P css={{ gridArea: "c" }}>{children}</P>
          {footnotes}
        </Content>
      );
    },
    [INLINES.EMBEDDED_ENTRY]: (node: Inline) => footnote(node),
  },
};

const RichText = ({ source }: RichTextProps): JSX.Element => {
  return (
    <article>{documentToReactComponents(source as Document, options)}</article>
  );
};

export default RichText;
