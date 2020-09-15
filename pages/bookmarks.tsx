import { GetStaticProps } from "next";
import { ContentAPI } from "services/contentful";
import { Bookmark } from "services/contentful.types";
import { ReactElement } from "react";

export const getStaticProps: GetStaticProps = async ({}) => {
  const api = new ContentAPI();
  const posts = await api.fetchBookmarks();
  return { props: { posts } };
};

const List = ({ posts }: { posts: Array<Bookmark> }): ReactElement => {
  return (
    <ul>
      {posts.map((entry) => (
        <li key={entry.id}>
          <a href={entry.url}>{entry.title}</a>
          <p>{entry.tag}</p>
          <p>{entry.date}</p>
        </li>
      ))}
    </ul>
  );
};

export default List;
