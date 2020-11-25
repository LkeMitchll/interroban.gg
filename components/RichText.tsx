import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type {
  Block,
  Document,
  Heading2,
  Hyperlink,
  Inline,
  Paragraph,
} from "@contentful/rich-text-types";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { A, BlockQuote, BulletList, Heading, Subtitle } from "designSystem";
import { footnote, generateFootnotes } from "helpers/footnote";
import type { RichTextChildren } from "services/contentful.types";
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

  " *": {
    gridColumn: "c",
  },

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
      <Heading
        as="h2"
        css={{ gridArea: "auto / c", marginTop: "$1" }}
        size="small"
      >
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (_: Heading2, children: RichTextChildren) => (
      <Subtitle as="h3">{children}</Subtitle>
    ),
    [BLOCKS.UL_LIST]: (_: Block, children: RichTextChildren) => (
      <BulletList>{children}</BulletList>
    ),
    [BLOCKS.QUOTE]: (_: Block, children: RichTextChildren) => (
      <BlockQuote>{children}</BlockQuote>
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
