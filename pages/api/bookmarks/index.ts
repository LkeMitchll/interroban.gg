import type { NextApiRequest, NextApiResponse } from "next";
import { ContentAPI } from "services/contentful";
import type { Bookmark } from "services/contentful.types";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Bookmark[]>,
): Promise<any> => {
  const api = new ContentAPI();
  const bookmarks = await api.fetchBookmarks();
  res.status(200).json(bookmarks);
};
