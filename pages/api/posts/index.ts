import { NextApiRequest, NextApiResponse } from "next";
import { ContentAPI } from "services/contentful";

type ShortBlogPost = {
  id: string;
  title: string;
  slug: string;
  date: Date;
  url?: string;
  content: null;
  description: string;
};

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<ShortBlogPost[]>,
): Promise<any> => {
  const api = new ContentAPI();
  const posts = (await api.fetchBlogPosts()) as ShortBlogPost[];
  posts.map((post) => {
    delete post.content;
    post.url = "https://interroban.gg/post/" + post.slug;
  });
  res.status(200).json(posts);
};