import {
  Bookmarks,
  Intro,
  PageMeta,
  Posts,
  Project,
  Splitter,
} from "components";
import { Heading } from "designSystem";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import type {
  BlogPost,
  Bookmark,
  List,
  Page,
  Project as TProject,
} from "services/contentful.types";
import { styled } from "stitches";

interface HomeProps {
  page: Page;
  posts: BlogPost[];
  bookmarks: Bookmark[];
  projects: List;
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("gs1BugZQXA8mN7DniEOFx");
  const posts = await api.fetchBlogPosts(3);
  const bookmarks = await api.fetchBookmarks(3);
  const projects = await api.fetchList("1UfYIu858cZdZuMjgejpRG");

  return { props: { page, posts, bookmarks, projects } };
};

const Beta = styled("span", {
  fontFamily: "$mono",
  fontSize: "$3",
  textDecoration: "none",
});

const Home = ({
  page,
  posts,
  bookmarks,
  projects,
}: HomeProps): ReactElement => {
  return (
    <>
      <PageMeta title={page.title} />
      <Intro content={page} />
      <Splitter
        col1={<Posts title="Recent Posts" posts={posts} as="h2" />}
        col2={<Bookmarks title="Recent Bookmarks" posts={bookmarks} as="h2" />}
        margin="large"
      />
      <section>
        <Heading as="h2" size="large">
          Selected Work <Beta>beta</Beta>
        </Heading>
        {projects.items.map((project: TProject) => (
          <Project key={project.id} data={project} />
        ))}
      </section>
    </>
  );
};

export default Home;
