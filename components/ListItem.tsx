import { styled } from "tokens";
import { ReactElement } from "react";
import { A, P, SecondaryText, TertiaryText } from "designSystem";

interface ListItemProps {
  top?: string;
  title: string;
  url?: string;
  subtitle: string;
}

const Container = styled("li", {
  marginBottom: "$2",
});

export default function ListItem({
  top,
  title,
  url,
  subtitle,
}: ListItemProps): ReactElement {
  return (
    <Container>
      {top ? (
        <TertiaryText css={{ marginBottom: "$0" }}>{top}</TertiaryText>
      ) : null}
      {url ? (
        <A href={url}>{title}</A>
      ) : (
        <P css={{ marginBottom: "$0", lineHeight: "$relaxed" }}>{title}</P>
      )}
      <SecondaryText>{subtitle}</SecondaryText>
    </Container>
  );
}
