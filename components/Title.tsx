import { styled } from "stitches";
import { Heading } from "designSystem";
import { ArrowLink } from "components";
import { ReactElement } from "react";
import { TCssWithBreakpoints } from "@stitches/react";

type TitleLink = "url" | "text";

interface TitleProps {
  title: string;
  link?: Record<TitleLink, string>;
  css?: TCssWithBreakpoints<any>;
  as?: keyof JSX.IntrinsicElements;
  hidden?: boolean;
}

const Header = styled("header", {
  marginBottom: "$2",
});

const Title = ({
  link = null,
  title,
  css,
  as,
  hidden,
}: TitleProps): ReactElement => {
  return (
    <Header css={css}>
      {!hidden && (
        <Heading
          as={as ? as : "h2"}
          css={{ lineHeight: "$default" }}
          size="large"
          margin="small"
        >
          {title}
        </Heading>
      )}
      {link ? <ArrowLink url={link.url} text={link.text} /> : null}
    </Header>
  );
};

export default Title;
