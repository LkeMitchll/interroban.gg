import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  Block,
  BLOCKS,
  Document,
  Heading2,
  Hyperlink,
  Inline,
  INLINES,
  Paragraph,
} from "@contentful/rich-text-types";
import { BlockQuote } from "components";
import { A, BulletList, Heading, Subtitle } from "designSystem";
import { footnote, generateFootnotes } from "helpers/footnote";
import { RichTextChildren } from "services/contentful.types";
import { styled } from "stitches";

type RichTextProps = {
  source?: Document;
  unwrapped?: boolean;
};

const Content = styled("article", {
  display: "grid",
  gridColumnGap: "$2",
  gridRowGap: "$1",
  position: "relative",

  variants: {
    layout: {
      small: {
        gridTemplate: `"c c c c" auto / 1fr 1fr 1fr 1fr`,
      },
      footNoteRight: {
        gridTemplate: `". c c f" auto / 1fr 1fr 1fr 1fr`,
      },
    },
  },
});

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Paragraph, children: RichTextChildren) => {
      return generateFootnotes(node, children);
    },
    [BLOCKS.HEADING_2]: (_: Heading2, children: RichTextChildren) => (
      <Heading as="h2" css={{ gridArea: "auto / c" }} size="small">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (_: Heading2, children: RichTextChildren) => (
      <Subtitle level="h3" css={{ gridArea: "auto / c" }}>
        {children}
      </Subtitle>
    ),
    [BLOCKS.UL_LIST]: (_: Block, children: RichTextChildren) => (
      <BulletList css={{ gridArea: "auto / c" }}>{children}</BulletList>
    ),
    [BLOCKS.QUOTE]: (_: Block, children: RichTextChildren) => (
      <BlockQuote css={{ gridArea: "auto / c" }}>{children}</BlockQuote>
    ),
    [INLINES.HYPERLINK]: (node: Hyperlink, children: RichTextChildren) => {
      return <A href={node.data.uri}>{children}</A>;
    },
    [INLINES.EMBEDDED_ENTRY]: (node: Inline) => footnote(node),
  },
};

const RichText = ({ source, unwrapped }: RichTextProps): JSX.Element => {
  const renderedNode = documentToReactComponents(source as Document, options);
  return (
    <>
      {!unwrapped ? (
        <Content
          layout={{
            initial: "small",
            bp3: "footNoteRight",
          }}
        >
          {renderedNode}
        </Content>
      ) : (
        <>{renderedNode}</>
      )}
    </>
  );
};

export default RichText;
