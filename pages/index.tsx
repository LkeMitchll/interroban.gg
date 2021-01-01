import { Hero, PageMeta, Project, Splitter, TextList } from "components";
import { Heading } from "designSystem";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import { ContentAPI } from "services/contentful";
import type {
  BlogPostPreview,
  Bookmark,
  List,
  Page,
  Project as TProject,
} from "services/contentful.types";
import { styled } from "stitches";

interface HomeProps {
  page: Page;
  posts: BlogPostPreview[];
  bookmarks: Bookmark[];
  projects: List;
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const page = await api.fetchPage("3PVdf7SKLVY2peVTFh0ft");
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
      <Hero
        title="About Me"
        intro={page.descriptionRich}
        linkOverride={{ url: "/about", text: "Read more" }}
        layoutOverride={{ initial: "fullWidth", bp2: "secondHalf" }}
      />
      <Splitter
        col1={
          <TextList
            title="Recent Posts"
            items={posts}
            titleTag="h2"
            titleSize="large"
            link={{ url: "/journal", text: "See more" }}
          />
        }
        col2={
          <TextList
            title="Recent Bookmarks"
            items={bookmarks}
            titleTag="h2"
            titleSize="large"
            link={{ url: "/bookmarks", text: "See more" }}
            externalLinks
          />
        }
      />
      <article>
        <Heading as="h2" size="large">
          Selected Work <Beta>beta</Beta>
        </Heading>
        {projects.items.map((project: TProject) => (
          <Project key={project.id} data={project} />
        ))}
      </article>
    </>
  );
};

export default Home;
