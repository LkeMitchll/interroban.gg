import type { GetStaticProps } from "next";
import { ContentAPI } from "services/contentful";
import ReactMarkdown from "react-markdown";
import { ResponsiveImage } from "components";
import footnotes from "remark-footnotes";
import { styled } from "stitches";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchMarkdownExample("3rlwUnai4cbTpWKrQjUSrF");
  page.content.images = await api.fetchMultipleAssets(page.content.images);
  return { props: { page } };
};

interface TestProps {
  page: any;
}

const FootnoteDefinition = styled("aside", {});

const FootnoteParent = styled("section", {
  [`> ${FootnoteDefinition}`]: {
    position: "absolute",
  },
});

function Test({ page }: TestProps): any {
  const renderers = {
    root: (field) => {
      field.node.children.forEach((child, i) => {
        if (child.type == "footnoteDefinition") {
          field.children[i - 1].props.children.push(field.children[i]);
          field.children[i] = null;
        }
      });

      return field.children;
    },
    paragraph: (field) => {
      let hasFootnotes = false;

      field.node.children.forEach((child) => {
        if (child.type == "footnoteReference") {
          hasFootnotes = true;
        }
      });

      if (hasFootnotes) {
        return (
          <FootnoteParent>
            <p>{field.children}</p>
          </FootnoteParent>
        );
      } else {
        return <p>{field.children}</p>;
      }
    },
    footnoteReference: (field) => {
      return <a href={`#${field.identifier}`}>hi</a>;
    },
    footnoteDefinition: (field) => {
      return (
        <FootnoteDefinition id={field.identifier}>
          {field.children}
        </FootnoteDefinition>
      );
    },
    image: (field) => {
      const imgID = field.src.split("/")[4];
      return <ResponsiveImage image={page.content.images[imgID]} />;
    },
  };

  return (
    <ReactMarkdown renderers={renderers} plugins={[footnotes]}>
      {page.content.markdown}
    </ReactMarkdown>
  );
}

export default Test;
