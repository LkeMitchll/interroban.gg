import { ReactElement } from "react";
import { Tokens, Heading, Link, P, Image } from "../../designSystem";
import { Page } from "../../../services/contentful.types";

export default function About({ content }: { content?: Page }): ReactElement {
  const imageURL =
    "https://images.unsplash.com/photo-1598965897289-4768a8799acc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80";
  return (
    <>
      <section>
        <Image src={imageURL} alt="A nice photo" />
        <div className="title">
          <Heading>{content.title}</Heading>
          <Link url="#">Read more</Link>
        </div>
        <div className="content">
          <P>{content.description}</P>
        </div>
      </section>

      <style jsx>{`
        section {
          display: grid;
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
        }

        .title {
          grid-area: b;
        }

        .content {
          grid-area: c;
        }
      `}</style>
    </>
  );
}
