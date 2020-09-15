import { ReactNode } from "react";
import { INLINES, Inline, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type RichTextProps = {
  source?: Document;
};

function footnote(node: Inline): ReactNode {
  const content = node.data.target.fields.content;
  return <sup>{documentToReactComponents(content)}</sup>;
}

const options = {
  renderNode: {
    [INLINES.EMBEDDED_ENTRY]: (node: Inline) => footnote(node),
  },
};

const RichText = ({ source }: RichTextProps): JSX.Element => {
  return <div>{documentToReactComponents(source as Document, options)}</div>;
};

export default RichText;
