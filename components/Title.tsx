import { ReactElement } from "react";
import { Tokens, Heading, Link } from "./designSystem";

type TitleLink = "url" | "text";

interface TitleProps {
  sectionNumber?: string;
  title: string;
  link?: Record<TitleLink, string>;
  className?: string;
}

const Title = ({
  sectionNumber = null,
  link = null,
  title,
  className,
}: TitleProps): ReactElement => (
  <>
    <header className={`title ${className}`}>
      <Heading level="h2">
        <span>{sectionNumber}</span>
        {title}
      </Heading>
      {link ? <Link url={link.url}>{link.text}</Link> : null}
    </header>

    <style jsx>{`
      .title {
        margin-bottom: ${Tokens.space[1]};
      }

      .title :global(h2) {
        line-height: ${Tokens.lineHeights.default};
      }

      .title :global(h2 span) {
        font-family: ${Tokens.fonts.mono};
        font-size: ${Tokens.fontSizes[2]};
        display: block;
        margin-bottom: ${Tokens.space[0]};
      }
    `}</style>
  </>
);

export default Title;
