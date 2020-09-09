import { ReactElement } from "react";
import css from "styled-jsx/css";
import ReactMarkdown from "react-markdown";
import { Tokens } from "./designSystem";

export default function Markdown(
  source: Record<"source", string>,
): ReactElement {
  return (
    <>
      <ReactMarkdown className={className} {...source} />
      {styles}
    </>
  );
}

const { className, styles } = css.resolve`
  div :global(p) {
    font-family: ${Tokens.fonts.serif};
    margin-top: 0;
    margin-bottom: ${Tokens.space[1]};
    max-width: 30rem;
  }
`;
