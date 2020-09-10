import React from "react";
import NextDocument, { DocumentContext } from "next/document";
import { css } from "../components/stitches";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext): Promise<any> {
    const originalRenderPage = ctx.renderPage;

    try {
      let extractedStyles: Array<string>;
      ctx.renderPage = () => {
        const { styles, result } = css.getStyles(originalRenderPage);
        extractedStyles = styles;
        return result;
      };

      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}

            {extractedStyles.map((content, index) => (
              <style
                key={index}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ))}
          </>
        ),
      };
    } finally {
    }
  }
}
