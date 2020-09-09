import { ReactElement } from "react";
import { Tokens } from ".";

const Small = ({ children }: { children: React.ReactNode }): ReactElement => (
  <>
    <small>{children}</small>

    <style jsx>{`
      small {
        font-family: ${Tokens.fonts.serif};
        font-size: ${Tokens.fontSizes[2]};
        color: ${Tokens.colors.secondary};
      }
    `}</style>
  </>
);

export default Small;
