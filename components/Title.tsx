import { styled } from "./stitches";
import { ReactElement } from "react";
import { Heading } from "./designSystem";
import { Link } from ".";

type TitleLink = "url" | "text";

interface TitleProps {
  sectionNumber?: string;
  title: string;
  link?: Record<TitleLink, string>;
  css?: Record<string, string>;
}

const Header = styled("header", {
  marginBottom: "$1",
});

const Number = styled("span", {
  fontFamily: "$mono",
  fontSize: "$3",
  display: "block",
  marginBottom: "$0",
});

const Title = ({
  sectionNumber = null,
  link = null,
  title,
  css,
}: TitleProps): ReactElement => {
  return (
    <Header css={css}>
      <Heading level="h2" css={{ lineHeight: "$default" }}>
        <Number>{sectionNumber}</Number>
        {title}
      </Heading>
      {link ? <Link url={link.url}>{link.text}</Link> : null}
    </Header>
  );
};

export default Title;
