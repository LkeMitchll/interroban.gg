import { styled } from "tokens";
import { Heading } from "designSystem";
import { NavLink } from "components";
import { ReactElement } from "react";
import { TCssWithBreakpoints } from "@stitches/react";

type TitleLink = "url" | "text";

interface TitleProps {
  title: string;
  link?: Record<TitleLink, string>;
  css?: TCssWithBreakpoints<any>;
}

const Header = styled("header", {
  marginBottom: "$1",
});

const Title = ({ link = null, title, css }: TitleProps): ReactElement => {
  return (
    <Header css={css}>
      <Heading level="h2" css={{ lineHeight: "$default" }}>
        {title}
      </Heading>
      {link ? <NavLink url={link.url}>{link.text}</NavLink> : null}
    </Header>
  );
};

export default Title;
