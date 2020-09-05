import { ContentfulClientApi, createClient } from "contentful";
import { Page } from "./contentful.types";

export class ContentAPI {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }

  async fetchPage(id: string): Promise<Page> {
    return await this.client.getEntry(id).then((result) => {
      const entry: { sys: any; fields: any } = result;

      const page = {
        id: entry.sys.id,
        title: entry.fields.title,
        description: entry.fields.description,
      };
      return page;
    });
  }
}
