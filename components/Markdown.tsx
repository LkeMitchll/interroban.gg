import ReactMarkdown from "react-markdown";
import { P, A } from "designSystem";
import { ReactElement } from "react";

export default function Markdown({
  source,
  className,
}: {
  source: string;
  className?: string;
}): ReactElement {
  const elements = {
    paragraph: P,
    link: A,
  };
  return (
    <ReactMarkdown
      className={className && className.toString()}
      renderers={elements}
      source={source}
    />
  );
}
