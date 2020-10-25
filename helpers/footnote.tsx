import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  Hyperlink,
  Inline,
  INLINES,
  Paragraph,
} from "@contentful/rich-text-types";
import { ResponsiveImage } from "components";
import { A, Footnote, P, Small } from "designSystem";
import { ImageSizes } from "helpers/image";
import { ReactNode } from "react";
import { Asset, RichTextChildren } from "services/contentful.types";
import { styled } from "stitches";

const SubContainer = styled("section", {
  display: "grid",
  gridGap: "$2",
  position: "relative",

  variants: {
    layout: {
      vertical: {
        gridArea: "auto / c",
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      horizontal: {
        gridArea: "auto / c / auto / f",
        gridTemplateColumns: "repeat(3, 1fr)",
      },
    },
  },
});

export function footnote(node: Inline): ReactNode {
  const content = node.data.target.fields.content;
  const rawImage = node.data.target.fields?.image.fields;
  const image: Asset = {
    url: rawImage.file.url,
    width: rawImage.file.details.image.width,
    height: rawImage.file.details.image.height,
    desc: rawImage.description,
  };

  const footnoteOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_: Paragraph, children: RichTextChildren) => {
        return (
          <>
            <ResponsiveImage image={image} sizes={ImageSizes.quarter} />
            <Small as="figcaption">Image: {children}</Small>
          </>
        );
      },
      [INLINES.HYPERLINK]: (node: Hyperlink, children: RichTextChildren) => {
        return (
          <A href={node.data.uri} size="small">
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

export function generateFootnotes(
  node: Paragraph,
  children: RichTextChildren,
): ReactNode {
  const footnotes = [];

  node.content.map((child, i) => {
    if (child.nodeType === "embedded-entry-inline") {
      child.data.target.sys.position = i;
      footnotes.push(children[i]);
      children.splice(i, 1);
    }
  });

  if (footnotes.length !== 0) {
    return (
      <SubContainer layout={{ initial: "vertical", bp2: "horizontal" }}>
        <P
          css={{
            gridArea: "1 / 1 / 1 / 4",
            bp3: { gridColumnEnd: "3" },
          }}
        >
          {children}
        </P>
        {footnotes}
      </SubContainer>
    );
  } else {
    return <P css={{ gridArea: "auto / c" }}>{children}</P>;
  }
}
