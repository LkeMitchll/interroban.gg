import { ReactElement } from "react";
import { Tokens } from ".";

interface LinkProps {
  children: React.ReactNode;
  url: string;
}

export default function Link({ children, url }: LinkProps): ReactElement {
  return (
    <>
      <a href={url}>{children}</a>

      <style jsx>{`
        a {
          color: ${Tokens.colors.primary};
          font-family: ${Tokens.fonts.mono};
          font-size: ${Tokens.fontSizes[2]};
          border-bottom: 1px solid ${Tokens.colors.primary};
          text-decoration: none;
        }
      `}</style>
    </>
  );
}
