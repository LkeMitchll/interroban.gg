import { ReactElement } from "react";
import { Tokens } from ".";

export default function Image({
  src,
  alt,
}: {
  src: string;
  alt: string;
}): ReactElement {
  return (
    <>
      <img src={src} alt={alt} />

      <style jsx>{`
        img {
          width: 100%;
          margin-bottom: ${Tokens.space[1]};
          border-radius: 2px;
        }
      `}</style>
    </>
  );
}
