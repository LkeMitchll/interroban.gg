import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Block, Document, Inline } from "@contentful/rich-text-types";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { ResponsiveImage } from "components";
import {
  A,
  BlockQuote,
  BulletList,
  Grid,
  GridChild,
  Heading,
  P,
  Small,
  Subtitle,
} from "designSystem";
import { ImageSizes } from "helpers/image";
import { ReactNode } from "react";
import { convertImage } from "services/contentful";
import type { RichTextChildren } from "services/contentful.types";
import { styled } from "./designSystem/stitches";

type RichTextProps = {
  source: Document;
  unwrapped?: boolean;
};

const FootnoteParent = styled("section", {
  position: "relative",

  ["> aside"]: {
    margin: "$0",
    bp3: {
      position: "absolute",
      width: "calc(50% - 1rem)",
      right: "calc(-50% - 1rem)",
      top: "0",
    },
  },
});

const options = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: () => {
      // Don't render footnotes immediately
      return null;
    },
    [BLOCKS.PARAGRAPH]: (node: Block, children: RichTextChildren) => {
      // Pop out inline-entries into new containers
      const footnotes = node.content.filter(
        (child) => child.nodeType == "embedded-entry-inline"
      );

      if (footnotes.length > 0) {
        return (
          <FootnoteParent>
            <P>{children}</P>
            {footnotes && renderFootnotes(footnotes as Inline[])}
          </FootnoteParent>
        );
      } else {
        return <P>{children}</P>;
      }
    },
    [BLOCKS.HEADING_2]: (_: Block, children: RichTextChildren) => (
      <Heading as="h2" margin="top" size="small">
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (_: Block, children: RichTextChildren) => (
      <Subtitle as="h3">{children}</Subtitle>
    ),
    [BLOCKS.UL_LIST]: (_: Block, children: RichTextChildren) => (
      <BulletList>{children}</BulletList>
    ),
    [BLOCKS.QUOTE]: (_: Block, children: RichTextChildren) => (
      <BlockQuote>{children}</BlockQuote>
    ),
    [INLINES.HYPERLINK]: (node: Inline, children: RichTextChildren) => (
      <A href={node.data.uri} target="_blank" rel="noreferrer">
        {children}
      </A>
    ),
  },
};

const footnoteOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: Block, children: RichTextChildren) => (
      <P>
        <Small>{children}</Small>
      </P>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (_: Block, children: RichTextChildren) => (
      <aside>{children}</aside>
    ),
    [INLINES.EMBEDDED_ENTRY]: (node: Inline) => {
      const image = convertImage(node.data.target.fields.image);
      const renderedCaptionNode = documentToReactComponents(
        node.data.target.fields.content,
        footnoteOptions
      );
      return (
        <>
          <ResponsiveImage image={image} sizes={ImageSizes.quarter} />
          {renderedCaptionNode}
        </>
      );
    },
  },
};

function renderFootnotes(nodes: Inline[]): ReactNode {
  const doc: Document = {
    content: [{ nodeType: BLOCKS.EMBEDDED_ENTRY, data: {}, content: nodes }],
    nodeType: BLOCKS.DOCUMENT,
    data: {},
  };

  const renderedFootnoteNode = documentToReactComponents(doc, footnoteOptions);
  return renderedFootnoteNode;
}

const RichText = ({ source, unwrapped }: RichTextProps): JSX.Element => {
  const renderedNode = documentToReactComponents(source as Document, options);
  return (
    <>
      {!unwrapped ? (
        <Grid as="section" gap="small" data-cy="content">
          <GridChild
            column={{
              initial: "fullWidth",
              bp2: "threeQuarters",
              bp3: "center",
            }}
          >
            {renderedNode}
          </GridChild>
        </Grid>
      ) : (
        <>{renderedNode}</>
      )}
    </>
  );
};

export default RichText;
