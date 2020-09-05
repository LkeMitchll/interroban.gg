import { ContentfulClientApi, createClient } from "contentful";
import { Page, Bookmark } from "./contentful.types";

export class ContentAPI {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }

  convertBookmark = (rawData: { sys: any; fields: any }): Bookmark => {
    const rawPost = rawData.fields;
    return {
      id: rawData.sys.id,
      title: rawPost.title,
      url: rawPost.url,
      tag: rawPost.tag,
      date: rawPost.publishDate,
    };
  };

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

  async fetchBookmarks(): Promise<Array<Bookmark>> {
    return await this.client
      .getEntries({
        content_type: "blogPost",
        order: "-fields.publishDate",
        limit: 1000,
      })
      .then((result) => {
        const posts = result.items.map((entry) => this.convertBookmark(entry));
        return posts;
      });
  }
}
