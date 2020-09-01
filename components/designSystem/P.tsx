import { ReactElement } from "react";

export default function P({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return <p>{children}</p>;
}
