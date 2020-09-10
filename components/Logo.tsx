import { styled } from "./stitches";
import { ReactElement } from "react";
import Link from "next/link";
import { Heading } from "./designSystem";

const Container = styled("div", {
  display: "flex",
  alignItems: "flex-end",
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
      <Link href="/">
        <A>
          <Heading
            css={{
              fontSize: "$2",
              letterSpacing: "-0.5px",
              lineHeight: "$crushed",
            }}
          >
            Luke Mitchell? <Secondary>Product Designer!</Secondary>
          </Heading>
        </A>
      </Link>
    </Container>
  );
}
