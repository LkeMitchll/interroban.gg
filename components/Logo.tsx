import NavLink from "next/link";
import { styled } from "tokens";
import { Heading } from "designSystem";
import { ReactElement } from "react";

const Container = styled("div", {
  display: "flex",
});

const A = styled("a", {
  textDecoration: "none",
});

const Secondary = styled("span", {
  display: "block",
  fontWeight: "$normal",
});

export default function Logo({
  css,
}: {
  css: Record<string, string>;
}): ReactElement {
  return (
    <Container css={css}>
      <NavLink href="/">
        <A href="#">
          <Heading
            css={{
              fontSize: "$2",
              letterSpacing: "$logo",
              lineHeight: "$crushed",
            }}
          >
            Luke Mitchell? <Secondary>Product Designer!</Secondary>
          </Heading>
        </A>
      </NavLink>
    </Container>
  );
}
