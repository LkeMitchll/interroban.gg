import type { NextApiRequest, NextApiResponse } from "next";
import { ContentAPI } from "services/contentful";
import type { Bookmark } from "services/contentful.types";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Bookmark[]>
): Promise<void> => {
  const api = new ContentAPI();
  const bookmarks = await api.fetchBookmarks(1000, 0);
  res.status(200).json(bookmarks);
};
