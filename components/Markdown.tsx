import ReactMarkdown from "react-markdown";
import { ResponsiveImage } from "components";
import footnotes from "remark-footnotes";
import { styled } from "stitches";
import { customFootnotes } from "helpers/footnotes";
import {
  BulletList,
  BlockQuote,
  Grid,
  GridChild,
  P,
  A,
  NumberedList,
  Heading,
  Subtitle,
} from "designSystem";
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
  href?: string;
  ordered?: boolean;
  level?: number;
  backRef?: boolean;
  node?: MarkdownRenderer;
}

const FootnoteDefinition = styled("aside", {
  [`> ${P}`]: {
    fontSize: "$3",
    marginTop: "$_5",
  },
  ["  strong"]: {
    fontFamily: "$mono",
  },
  [`  ${A}`]: {
    fontSize: "$3",
  },
});

const FootnoteParent = styled("section", {
  position: "relative",

  [`> ${FootnoteDefinition}`]: {
    margin: "$0",
    width: "50%",
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
      return (
        <sup>
          <A
            appearance="footnoteRef"
            size="small"
            href={`#def_${field.identifier}`}
            id={`ref_${field.identifier}`}
          >
            {field.identifier}
          </A>
        </sup>
      );
    },
    footnoteDefinition: (field: MarkdownRenderer) => {
      return (
        <FootnoteDefinition id={`def_${field.identifier}`}>
          {field.children}
        </FootnoteDefinition>
      );
    },
    paragraph: (field: MarkdownRenderer) => {
      return <P>{field.children}</P>;
    },
    blockquote: (field: MarkdownRenderer) => {
      return <BlockQuote>{field.children}</BlockQuote>;
    },
    link: (field: MarkdownRenderer) => {
      const internal = field.href.startsWith("#");
      return (
        <A
          href={field.href}
          target={!internal && "_blank"}
          rel={!internal && "noreferrer"}
          appearance={field.node.backRef ? "footnoteRef" : null}
        >
          {field.children}
        </A>
      );
    },
    image: (field: MarkdownRenderer) => {
      const imgID = field.src.split("/")[4];
      return <ResponsiveImage image={images[imgID]} />;
    },
    list: (field: MarkdownRenderer) => {
      switch (field.ordered) {
        case true:
          return <NumberedList>{field.children}</NumberedList>;
        case false:
          return <BulletList>{field.children}</BulletList>;
      }
    },
    listItem: (field: MarkdownRenderer) => {
      return <li>{field.children}</li>;
    },
    heading: (field: MarkdownRenderer) => {
      switch (field.level) {
        case 1:
          return (
            <Heading as="h1" size="small">
              {field.children}
            </Heading>
          );
        case 2:
          return (
            <Heading as="h2" size="small">
              {field.children}
            </Heading>
          );
        case 3:
          return <Subtitle as="h3">{field.children}</Subtitle>;
        case 4:
          return <Subtitle as="h4">{field.children}</Subtitle>;
      }
    },
  };

  return (
    <Grid as="section">
      <GridChild
        as="section"
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
