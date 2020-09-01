import { ReactElement } from "react";
import { Heading } from "./designSystem";

export default function Logo(): ReactElement {
  return (
    <>
      <Heading>
        Luke Mitchell <span>Product Designer</span>
      </Heading>

      <style jsx>{`
        span {
          display: block;
        }
      `}</style>
    </>
  );
}
