import { ArrowLink } from "components";
import { Heading } from "designSystem";
import type { ReactElement } from "react";

type TitleLink = "url" | "text";

interface TitleProps {
  title: string;
  link?: Record<TitleLink, string>;
  as?: keyof JSX.IntrinsicElements;
  hidden?: boolean;
}

const Title = ({
  link = null,
  title,
  as,
  hidden,
}: TitleProps): ReactElement => {
  return (
    <>
      {!hidden && (
        <Heading
          as={as ? as : "h2"}
          size="large"
          margin="small"
          lineHeight="default"
        >
          {title}
        </Heading>
      )}
      {link ? <ArrowLink url={link.url} text={link.text} /> : null}
    </>
  );
};

export default Title;
