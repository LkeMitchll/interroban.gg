import { NextApiRequest, NextApiResponse } from "next";
import { FeedAPI } from "services/feedbin";
import { Feed } from "services/feedbin.types";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Feed[]>,
): Promise<any> => {
  const api = new FeedAPI();
  const items = await api.fetchSubscriptions();

  res.status(200).json(items);
};
