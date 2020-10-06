import { GetStaticProps } from "next";
import { ContentAPI } from "services/contentful";
import { Bookmarks, Intro, Posts } from "compositions";
import { ReactElement } from "react";
import {
  BlogPost,
  Bookmark,
  List,
  Page,
  Project as ProjectType,
} from "services/contentful.types";
import { Splitter, Project, NavLink } from "components";
import { Heading } from "designSystem";
import { styled } from "components/stitches";

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
  const bookmarks = await api.fetchBookmarks(6);
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
      <Intro content={page} />
      <Splitter
        col1={
          <>
            <Posts title="Recent Posts" posts={posts} />
            <NavLink url="/journal">See all</NavLink>
          </>
        }
        col2={
          <>
            <Bookmarks title="Recent Bookmarks" posts={bookmarks} level="h2" />
            <NavLink url="/bookmarks">See all</NavLink>
          </>
        }
        css={{ marginBottom: "$3" }}
      />
      <section>
        <Heading level="h2">
          Selected Work <Beta>beta</Beta>
        </Heading>
        {projects.items.map((project: ProjectType) => (
          <Project key={project.id} data={project} />
        ))}
      </section>
    </>
  );
};

export default Home;
