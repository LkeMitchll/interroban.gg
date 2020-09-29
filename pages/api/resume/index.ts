import { NextApiRequest, NextApiResponse } from "next";
import { ContentAPI } from "services/contentful";
import { Job } from "services/contentful.types";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Array<Job>>,
): Promise<any> => {
  const api = new ContentAPI();
  const resume = await api.fetchList("4GpYef6usWILucVp1ZYNi9");
  res.status(200).json(resume.items);
};
