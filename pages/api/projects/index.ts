import type { NextApiRequest, NextApiResponse } from "next";
import { ContentAPI } from "services/contentful";
import type { Project } from "services/contentful.types";

export default async (
  _req: NextApiRequest,
  res: NextApiResponse<Project[]>,
): Promise<void> => {
  const api = new ContentAPI();
  const response = await api.fetchList("1UfYIu858cZdZuMjgejpRG");
  const projects = response.items as Project[];
  res.status(200).json(projects);
};
