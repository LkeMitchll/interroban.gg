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
      <A appearance="plain" aria-label="Home">
        <Heading
          size="large"
          margin="none"
          lineHeight="crushed"
          letterSpacing="tight"
        >
          Luke Mitchell <Secondary>Product Designer</Secondary>
        </Heading>
      </A>
    </Link>
  );
}
