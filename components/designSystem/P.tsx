import { ReactElement } from "react";
import { Tokens } from ".";

export default function P({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <>
      <p>{children}</p>

      <style jsx>{`
        p {
          margin-top: 0;
          font-family: ${Tokens.fonts.serif};
          margin-bottom: ${Tokens.space[1]};
          max-width: 30rem;
        }
      `}</style>
    </>
  );
}
