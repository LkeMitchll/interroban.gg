import { styled } from "tokens";
import { PlainList, TertiaryText, Subtitle, Small } from "designSystem";
import { Link } from "components";
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
    layout: {
      threeCol: {
        gridColumn: "1 / 4",

        bp1: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "$2",
          alignItems: "flex-end",
        },
      },
      oneCol: {
        gridColumn: "1/2",
        display: "inline",
      },
    },
    alignment: {
      bottom: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        [` h2`]: {
          lineHeight: "1",
          marginBottom: "$1",
        },
      },
    },
  },
});

const CopyNotice = styled("div", {
  gridColumn: "1/3",
});

const NavList = styled("ul", {
  padding: "0",
  margin: "0",
  listStyle: "none",

  "> li": {
    marginRight: "$2",
    bp2: {
      marginRight: 0,
    },
  },
  variants: {
    layout: {
      horizontal: {
        display: "flex",
        marginTop: "$1",
      },
      vertical: {
        display: "block",
        marginTop: "$1",
      },
    },
  },
});

export default function Footer(): ReactElement {
  return (
    <Container layout={{ initial: "threeCol", bp2: "fourCol" }}>
      <Column layout={{ initial: "threeCol", bp2: "oneCol" }}>
        <Small css={{ display: "block" }}>
          Luke Mitchell &mdash; <br />
          Product Designer
        </Small>
        <NavList layout={{ initial: "horizontal", bp2: "vertical" }}>
          <li>
            <Link url="#">Work</Link>
          </li>
          <li>
            <Link url="#">Journal</Link>
          </li>
          <li>
            <Link url="#">Bookmarks</Link>
          </li>
        </NavList>
      </Column>
      <Column alignment={"bottom"}>
        <Subtitle>Information</Subtitle>
        <PlainList>
          <li>
            <Link url="#" plain>
              About
            </Link>
          </li>
          <li>
            <Link url="#" plain>
              Colophon
            </Link>
          </li>
          <li>
            <Link url="#" plain>
              Uses
            </Link>
          </li>
        </PlainList>
      </Column>
      <Column alignment={"bottom"}>
        <Subtitle>Contact</Subtitle>
        <PlainList>
          <li>
            <Link url="#" plain>
              Email
            </Link>
          </li>
          <li>
            <Link url="#" plain>
              Twitter
            </Link>
          </li>
          <li>
            <Link url="#" plain>
              LinkedIn
            </Link>
          </li>
        </PlainList>
      </Column>
      <Column alignment={"bottom"}>
        <Subtitle>Elsewhere</Subtitle>
        <PlainList>
          <li>
            <Link url="#" plain>
              Dribbble
            </Link>
          </li>
          <li>
            <Link url="#" plain>
              Pinterest
            </Link>
          </li>
          <li>
            <Link url="#" plain>
              GitHub
            </Link>
          </li>
        </PlainList>
      </Column>
      <CopyNotice>
        <TertiaryText>&copy; 2020, Luke Mitchell</TertiaryText>
      </CopyNotice>
    </Container>
  );
}
