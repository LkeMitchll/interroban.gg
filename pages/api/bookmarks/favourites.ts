import type { NextApiRequest, NextApiResponse } from "next";
import { ContentAPI } from "services/contentful";
import type { Roundup } from "services/contentful.types";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Roundup[]>,
): Promise<any> => {
  const api = new ContentAPI();
  const roundups = await api.fetchRoundups();
  res.status(200).json(roundups);
};
