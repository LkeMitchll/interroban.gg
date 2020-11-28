import { Nav, NavLink } from "components";
import {
  Grid,
  GridChild,
  PlainList,
  Small,
  Subtitle,
  TertiaryText,
} from "designSystem";
import type { ReactElement } from "react";

type FooterLink = {
  url: string;
  title: string;
};

export default function SiteFooter(): ReactElement {
  const Title = (content: string) => (
    <Subtitle as="h4" margin="small">
      {content}
    </Subtitle>
  );

  const List = (links: FooterLink[]) => {
    return (
      <PlainList>
        {links.map((link: Record<"title" | "url", string>, i: number) => (
          <li key={i}>
            <NavLink
              url={link.url}
              margin={{ initial: "medium", bp2: "small" }}
              decoration="plain"
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </PlainList>
    );
  };

  const InfoLinks = [
    { title: "Colophon", url: "/colophon" },
    { title: "Uses", url: "/uses" },
    { title: "Feeds", url: "/feeds" },
  ];
  const ContactLinks = [
    { title: "Email", url: "mailto:luke@interroban.gg" },
    { title: "Twitter", url: "https://twitter.com/lkemitchll" },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/luke-mitchell-69ba421b3/",
    },
  ];
  const ElsewhereLinks = [
    { title: "Dribbble", url: "https://dribbble.com/Interrobang" },
    { title: "Pinterest", url: "https://www.pinterest.co.uk/lkemitchll" },
    { title: "GitHub", url: "https://www.github.com/lkemitchll" },
  ];

  return (
    <Grid as="footer">
      <GridChild column={{ initial: "fullWidth", bp1: "firstHalf", bp2: "$1" }}>
        <Small as="h4" display="block" aria-label="Site navigation">
          Luke Mitchell &mdash; <br />
          Product Designer
        </Small>
        <Nav layout={{ initial: "horizontal", bp2: "vertical" }} />
      </GridChild>
      <GridChild
        column={{ initial: "fullWidth", bp1: "$1", bp2: "$2" }}
        position="bottom"
      >
        {Title("Information")}
        {List(InfoLinks)}
      </GridChild>
      <GridChild
        column={{ initial: "fullWidth", bp1: "$2", bp2: "$3" }}
        position="bottom"
      >
        {Title("Contact")}
        {List(ContactLinks)}
      </GridChild>
      <GridChild
        column={{ initial: "fullWidth", bp1: "$3", bp2: "$4" }}
        position="bottom"
      >
        {Title("Elsewhere")}
        {List(ElsewhereLinks)}
      </GridChild>
      <GridChild column="fullWidth">
        <TertiaryText>&copy; 2020, Luke Mitchell</TertiaryText>
      </GridChild>
    </Grid>
  );
}
