import { styled, css } from "tokens";
import { ReactElement } from "react";
import { A, Image, P, SecondaryText, TertiaryText } from "designSystem";
import { TCssWithBreakpoints } from "@stitches/react";
import Link from "next/link";
import { CoverArt } from "services/spotify.types";

interface ListItemProps {
  top?: string;
  title: string;
  url?: string;
  urlAs?: string;
  subtitle: string;
  image?: CoverArt;
  external?: boolean;
  concat?: boolean;
}

const Container = styled("li", {
  marginBottom: "$2",
});

const Divider = styled("div", {
  display: "inline-block",
  verticalAlign: "text-top",
});

export default function ListItem({
  top,
  title,
  url,
  urlAs,
  subtitle,
  image,
  external,
  concat,
}: ListItemProps): ReactElement {
  const smallImage: TCssWithBreakpoints<any> = {
    display: "inline-block",
    width: "40px",
    marginBottom: "$0",
    marginRight: "$1",
    marginLeft: "$1",
    verticalAlign: "text-top",
    marginTop: "0.3rem",
  };
  const ellipsisText = css({
    paddingRight: "$1",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    bp2: {
      width: "350px",
      display: "block",
    },
    bp3: {
      width: "450px",
      display: "block",
    },
    bp4: {
      width: "300px",
      display: "block",
    },
  });

  return (
    <Container>
      {image ? (
        <Image
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
          css={smallImage}
        />
      ) : null}
      {top ? (
        <TertiaryText css={{ marginBottom: "$0" }}>{top}</TertiaryText>
      ) : null}
      <Divider>
        {url ? (
          <Link href={url} as={urlAs} passHref>
            <A
              target={external ? "_blank" : null}
              rel={external ? "noreferrer" : null}
              className={concat && ellipsisText}
            >
              {title}
            </A>
          </Link>
        ) : (
          <P css={{ marginBottom: "$0", lineHeight: "$relaxed" }}>{title}</P>
        )}
        <SecondaryText css={concat && ellipsisText}>{subtitle}</SecondaryText>
      </Divider>
    </Container>
  );
}
