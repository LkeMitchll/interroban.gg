import { styled } from "stitches";
import { ReactElement } from "react";
import { A, Image, P, SecondaryText, TertiaryText } from "designSystem";
import Link from "next/link";
import { CoverArt } from "services/spotify.types";

interface ListItemProps {
  top?: string;
  title: string;
  url?: string;
  subtitle: string;
  image?: CoverArt;
  external?: boolean;
}

const Container = styled("li", {
  marginBottom: "$2",
});

const Divider = styled("div", {
  verticalAlign: "text-top",

  variants: {
    appearance: {
      inline: {
        display: "inline-block",
      },
    },
  },
});

export default function ListItem({
  top,
  title,
  url,
  subtitle,
  image,
  external,
}: ListItemProps): ReactElement {
  return (
    <Container>
      {image ? (
        <Image
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
          size="tiny"
        />
      ) : null}
      {top ? <TertiaryText margin="none">{top}</TertiaryText> : null}
      <Divider appearance={image ? "inline" : null}>
        {url ? (
          <Link href={url} passHref>
            <A
              target={external ? "_blank" : null}
              rel={external ? "noreferrer" : null}
            >
              {title}
            </A>
          </Link>
        ) : (
          <P margin="none" lineHeight="relaxed">
            {title}
          </P>
        )}
        <SecondaryText>{subtitle}</SecondaryText>
      </Divider>
    </Container>
  );
}
