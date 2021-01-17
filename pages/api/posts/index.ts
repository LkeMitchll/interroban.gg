import type { NextApiRequest, NextApiResponse } from "next";
import { ContentAPI } from "services/contentful";

type ShortBlogPost = {
  id: string;
  title: string;
  slug: string;
  date: Date;
  url?: string;
  contentMarkdown: null;
  description: string;
};

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<ShortBlogPost[]>
): Promise<void> => {
  const api = new ContentAPI();
  const posts = (await api.fetchBlogPostsFull()) as ShortBlogPost[];
  posts.map((post) => {
    delete post.contentMarkdown;
    post.url = "https://interroban.gg/post/" + post.slug;
  });
  res.status(200).json(posts);
};
