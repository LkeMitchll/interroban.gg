import { Heading } from "designSystem";
import Link from "next/link";
import type { ReactElement } from "react";
import { styled } from "stitches";

const Container = styled("div", {
  display: "flex",
});

const A = styled("a", {
  textDecoration: "none",
});

const Secondary = styled("span", {
  display: "block",
});

export default function Logo({
  css,
}: {
  css: Record<string, string>;
}): ReactElement {
  return (
    <Container css={css}>
      <Link href="/" passHref>
        <A aria-label="Home" tabIndex={0}>
          <Heading
            size="large"
            margin="none"
            css={{
              letterSpacing: "$logo",
              lineHeight: "$crushed",
            }}
          >
            Luke Mitchell <Secondary>Product Designer</Secondary>
          </Heading>
        </A>
      </Link>
    </Container>
  );
}
