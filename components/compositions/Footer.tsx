import { styled } from "tokens";
import { PlainList, TertiaryText, Subtitle, Small } from "designSystem";
import { Link, Nav } from "components";
import { ReactElement } from "react";

const Container = styled("footer", {
  display: "grid",
  gridGap: "$2",
  marginBottom: "$2",

  variants: {
    layout: {
      threeCol: {
        gridTemplateColumns: "repeat(3, 1fr)",
      },
      fourCol: {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
    },
  },
});

const Column = styled("div", {
  variants: {
    position: {
      threeCol: {
        gridColumn: "1 / 4",
      },
      oneCol: {
        gridColumn: "1 / 2",
        display: "inline",
      },
      horizontal: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "$2",
        alignItems: "flex-end",
      },
    },
    alignment: {
      bottom: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      },
    },
  },
});

const Item = styled("li", {
  marginRight: "$2",

  bp2: {
    marginRight: 0,
  },
});

const CopyNotice = styled("div", {
  gridColumn: "1/3",
});

export default function Footer(): ReactElement {
  type FooterLink = {
    url: string;
    title: string;
  };

  const Title = (content: string) => (
    <Subtitle level="h3" css={{ lineHeight: "1", marginBottom: "$1" }}>
      {content}
    </Subtitle>
  );

  const List = (links: Array<FooterLink>) => {
    return (
      <PlainList>
        {links.map((link: Record<"title" | "url", string>, i: number) => (
          <Item key={i}>
            <Link url={link.url} plain>
              {link.title}
            </Link>
          </Item>
        ))}
      </PlainList>
    );
  };

  const InfoLinks = [
    { title: "About", url: "#" },
    { title: "Colophon", url: "#" },
    { title: "Uses", url: "#" },
  ];
  const ContactLinks = [
    { title: "Email", url: "#" },
    { title: "Twitter", url: "#" },
    { title: "LinkedIn", url: "#" },
  ];
  const ElsewhereLinks = [
    { title: "Dribbble", url: "#" },
    { title: "Pinterest", url: "#" },
    { title: "GitHub", url: "#" },
  ];

  return (
    <Container layout={{ initial: "threeCol", bp2: "fourCol" }}>
      <Column
        position={{ initial: "threeCol", bp1: "horizontal", bp2: "oneCol" }}
      >
        <Small css={{ display: "block" }}>
          Luke Mitchell &mdash; <br />
          Product Designer
        </Small>
        <Nav layout={{ initial: "horizontal", bp2: "vertical" }} />
      </Column>
      <Column alignment={"bottom"}>
        {Title("Information")}
        {List(InfoLinks)}
      </Column>
      <Column alignment={"bottom"}>
        {Title("Contact")}
        {List(ContactLinks)}
      </Column>
      <Column alignment={"bottom"}>
        {Title("Elsewhere")}
        {List(ElsewhereLinks)}
      </Column>
      <CopyNotice>
        <TertiaryText>&copy; 2020, Luke Mitchell</TertiaryText>
      </CopyNotice>
    </Container>
  );
}
