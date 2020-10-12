import { ReactElement } from "react";
import Head from "next/head";

export default function PageMeta({
  title,
  description,
}: {
  title: string;
  description?: string;
}): ReactElement {
  const pageTitle = `Luke Mitchell | ${title}`;
  const defaultDesc =
    "Personal site, blog, and portfolio of Luke Mitchell, a design director, product designer, and UI developer.";

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta content={pageTitle} name="title" />
      <meta content={pageTitle} name="twitter:title" />
      <meta
        content={description ? description : defaultDesc}
        name="description"
      />
      <meta content={description} name="twitter:description" />
      <meta content={description} property="og:description" />
      <meta content="en" property="og:locale" />
    </Head>
  );
}
