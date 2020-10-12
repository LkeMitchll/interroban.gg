import React from "react";
import NextDocument, { DocumentContext, Html } from "next/document";
import { css } from "tokens";

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
          <Html lang="en">
            {initialProps.styles}

            {extractedStyles.map((content, index) => (
              <style
                key={index}
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ))}
          </Html>
        ),
      };
    } finally {
    }
  }
}
