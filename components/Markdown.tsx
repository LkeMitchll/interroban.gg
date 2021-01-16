import ReactMarkdown from "react-markdown";
import { ResponsiveImage } from "components";
import footnotes from "remark-footnotes";
import { styled } from "stitches";
import { customFootnotes } from "helpers/footnotes";
import { Grid, GridChild } from "designSystem";
import { ReactElement } from "react";
import { Asset } from "services/contentful.types";

interface MarkdownProps {
  source: string;
  images: Asset[];
}
interface MarkdownRenderer {
  children: React.ReactNode;
  identifier?: string;
  src?: string;
}

const FootnoteDefinition = styled("aside", {});

const FootnoteParent = styled("section", {
  position: "relative",

  [`> ${FootnoteDefinition}`]: {
    margin: "$0",
    bp3: {
      position: "absolute",
      width: "calc(50% - 1rem)",
      right: "calc(-50% - 1rem)",
      top: "0",
    },
  },
});

function Markdown({ source, images }: MarkdownProps): ReactElement {
  const renderers = {
    sectionWithFootnotes: (field: MarkdownRenderer) => {
      return <FootnoteParent>{field.children}</FootnoteParent>;
    },
    footnoteReference: (field: MarkdownRenderer) => {
      return <a href={`#${field.identifier}`}>{field.identifier}</a>;
    },
    footnoteDefinition: (field: MarkdownRenderer) => {
      return (
        <FootnoteDefinition id={field.identifier}>
          {field.children}
        </FootnoteDefinition>
      );
    },
    image: (field: MarkdownRenderer) => {
      const imgID = field.src.split("/")[4];
      return <ResponsiveImage image={images[imgID]} />;
    },
  };

  return (
    <Grid>
      <GridChild
        as="article"
        column={{
          initial: "fullWidth",
          bp2: "threeQuarters",
          bp3: "center",
        }}
      >
        <ReactMarkdown
          renderers={renderers}
          plugins={[footnotes, customFootnotes]}
        >
          {source}
        </ReactMarkdown>
      </GridChild>
    </Grid>
  );
}

export default Markdown;
