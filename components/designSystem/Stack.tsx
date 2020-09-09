import { ReactElement } from "react";
import { Tokens } from ".";

interface StackProps {
  children: React.ReactNode;
  space?: string;
  className?: string;
}

export default function Stack({
  children,
  space = Tokens.space[1],
  className,
}: StackProps): ReactElement {
  return (
    <>
      <div className={`stack ${className}`}>{children}</div>

      <style jsx>{`
        .stack :global(> *) {
          margin-bottom: ${space};
        }
      `}</style>
    </>
  );
}
