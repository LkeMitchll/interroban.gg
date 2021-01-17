import { NavLink, PageMeta, Markdown, Title } from "components";
import { Heading, SecondaryText } from "designSystem";
import { formattedDate } from "helpers/date";
import { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import type { BlogPost } from "services/contentful.types";
import { styled } from "stitches";

type Params = {
  params: {
    slug: string;
  };
};

type Paths = {
  paths: Params[];
  fallback: boolean;
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const api = new ContentAPI();
  const post = await api.fetchBlogPostBySlug(params.slug);
  return { props: { post } };
};

export async function getStaticPaths(): Promise<Paths> {
  const api = new ContentAPI();
  const posts = await api.fetchBlogPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

const PageTitle = styled("header", {
  marginBottom: "$2",
  display: "grid",
  gridColumnGap: "$2",

  variants: {
    layout: {
      oneCol: {
        gridTemplateColumns: "1fr",
      },
      fourCol: {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
    },
  },
});

const Footer = styled("footer", {
  textAlign: "center",
  marginTop: "$2",
});

const PostTitle = styled("section", {
  gridColumn: "span 3",
  marginTop: "$1",

  bp3: {
    marginTop: "$0",
  },
});

export default function Post({ post }: { post: BlogPost }): ReactElement {
  return (
    <article>
      <PageMeta title={post.title} description={post.description} />
      <PageTitle layout={{ initial: "oneCol", bp3: "fourCol" }}>
        <Title
          title="Post"
          link={{ url: "/journal", text: "Back" }}
          as="p"
          hidden
        />
        <PostTitle>
          <Heading size="large">{post.title}</Heading>
          <SecondaryText>
            {post.date &&
              formattedDate(post.date, {
                month: "long",
                year: "numeric",
              })}
          </SecondaryText>
        </PostTitle>
      </PageTitle>
      <Markdown source={post.contentMarkdown} />
      <Footer>
        <NavLink url="/journal" appearance="underline">
          Back to Journal
        </NavLink>
      </Footer>
    </article>
  );
}
