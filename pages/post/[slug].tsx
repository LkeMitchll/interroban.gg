import { NavLink, RichText } from "components";
import { Heading, SecondaryText } from "components/designSystem";
import { styled } from "components/stitches";
import { GetStaticProps } from "next";
import { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import { BlogPost } from "services/contentful.types";
import { formattedDate } from "helpers/date";

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

const Header = styled("header", {
  marginBottom: "$2",

  variants: {
    alignment: {
      center: {
        textAlign: "center",
      },
      left: {
        textAlign: "left",
      },
    },
  },
});

const Footer = styled(Header, {
  marginTop: "$2",
});

export default function Post({ post }: { post: BlogPost }): ReactElement {
  return (
    <>
      <Header alignment={{ initial: "left", bp3: "center" }}>
        <Heading>{post.title}</Heading>
        <SecondaryText css={{ maxWidth: "unset" }}>
          {formattedDate(post.date, {
            month: "long",
            year: "numeric",
          })}
        </SecondaryText>
      </Header>
      <RichText source={post.content} />
      <Footer alignment={{ initial: "left", bp3: "center" }}>
        <SecondaryText css={{ marginBottom: "$1" }}>
          Written by Luke Mitchell &mdash; Product Designer
        </SecondaryText>
        <NavLink url="/journal">Back to Journal</NavLink>
      </Footer>
    </>
  );
}
