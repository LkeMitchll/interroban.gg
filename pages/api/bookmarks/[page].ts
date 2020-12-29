import type { NextApiRequest, NextApiResponse } from "next";
import { ContentAPI } from "services/contentful";
import type { Bookmark } from "services/contentful.types";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<Bookmark[]>,
): Promise<void> => {
  const skip = parseInt(req.query.page as string) * 100;
  const api = new ContentAPI();
  const bookmarks = await api.fetchBookmarks(100, skip);
  res.status(200).json(bookmarks);
};
