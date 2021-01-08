import type { NextApiRequest, NextApiResponse } from "next";
import { ContentAPI } from "services/contentful";
import type { Job, List } from "services/contentful.types";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Job[]>
): Promise<void> => {
  const api = new ContentAPI();
  const resume: List = await api.fetchList("4GpYef6usWILucVp1ZYNi9");
  res.status(200).json(resume.items as Job[]);
};
