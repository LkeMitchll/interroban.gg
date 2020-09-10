import { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { P, A } from "./designSystem";

export default function Markdown(
  source: Record<"source", string>,
): ReactElement {
  const elements = {
    paragraph: P,
    link: A,
  };
  return (
    <>
      <ReactMarkdown renderers={elements} {...source} />
    </>
  );
}
