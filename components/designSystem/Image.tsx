import { ReactElement } from "react";

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
        }
      `}</style>
    </>
  );
}
