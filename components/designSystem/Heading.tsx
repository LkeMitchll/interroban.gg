import { ReactElement } from "react";
import { Tokens } from ".";

interface HeadingProps {
  children: React.ReactNode;
  level?: keyof JSX.IntrinsicElements;
}

export default function Heading({
  children,
  level: Tag = "h1",
}: HeadingProps): ReactElement {
  return (
    <>
      <Tag className="heading">{children}</Tag>

      <style jsx>{`
        .heading {
          color: ${Tokens.colors.primary};
          font-size: ${Tokens.fontSizes[0]};
          font-family: ${Tokens.fonts.sans};
          font-weight: ${Tokens.fontWeights.semi};
          line-height: ${Tokens.lineHeights.heading};
          margin: 0 0 ${Tokens.space[0]};
        }
      `}</style>
    </>
  );
}
