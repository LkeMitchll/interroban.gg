import css from "styled-jsx/css";
import { ReactElement } from "react";
import { Tokens, Image, Small } from "../../designSystem";
import { Title, Markdown } from "../../";
import { Page } from "../../../services/contentful.types";

const title = css.resolve`
  header {
    grid-area: b;
  }
`;

export default function About({ content }: { content?: Page }): ReactElement {
  const imageURL =
    "https://images.unsplash.com/photo-1598965897289-4768a8799acc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80";
  return (
    <>
      <section>
        <Image src={imageURL} alt="A nice photo" />
        <Title
          title="About Me"
          sectionNumber="1.1"
          link={{ url: "#", text: "Read more" }}
          className={title.className}
        />
        <div className="content">
          <Markdown source={content.description} />
          <Small>
            Product Designer
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            UI & UX Developer
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            Mentor
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            Illustrator
          </Small>
        </div>
      </section>

      {title.styles}

      <style jsx>{`
        section {
          display: grid;
          grid-column-gap: ${Tokens.space[2]};
          grid-template:
            "a a a" auto
            "b b b" auto
            "c c c" auto / 1fr 1fr 1fr;
        }

        @media screen and (min-width: ${Tokens.breakpoints.small}) {
          section {
            grid-template:
              "a a a a" auto
              ". b b b" auto
              ". c c c" auto / 1fr 1fr 1fr 1fr;
          }
        }
        @media screen and (min-width: ${Tokens.breakpoints.medium}) {
          section {
            grid-template:
              ". a a a" auto
              ". b b b" auto
              ". c c c" auto / 1fr 1fr 1fr 1fr;
          }
        }

        @media screen and (min-width: ${Tokens.breakpoints.large}) {
          section {
            grid-template:
              ". a a a" auto
              ". b c c" auto / 1fr 1fr 1fr 1fr;
          }
        }

        section :global(img) {
          grid-area: a;
          margin-bottom: ${Tokens.space[2]};
        }

        .content {
          grid-area: c;
          margin-top: ${Tokens.space[1]};
        }

        .markdownContainer :global(p) {
          font-family: ${Tokens.fonts.serif};
        }
      `}</style>
    </>
  );
}
