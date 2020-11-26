import { Heading, A } from "designSystem";
import Link from "next/link";
import type { ReactElement } from "react";
import { styled } from "stitches";

const Secondary = styled("span", {
  display: "block",
});

export default function Logo(): ReactElement {
  return (
    <Link href="/" passHref>
      <A css={{ gridArea: "a" }} appearance="plain" aria-label="Home">
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
  );
}
