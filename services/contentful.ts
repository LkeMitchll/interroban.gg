import { ContentfulClientApi, createClient } from "contentful";
import { Page, Bookmark, List, Job, Asset } from "./contentful.types";

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

  convertJob = (rawData: { sys: any; fields: any }): Job => {
    const rawJob = rawData.fields;

    return {
      id: rawData.sys.id,
      title: rawJob.title,
      period: rawJob.period,
      company: rawJob.company,
    };
  };

  convertListItems = (
    type: string,
    data: Array<{ sys: any; fields: any }>,
  ): Array<Job> => {
    switch (type) {
      case "job":
        return data.map((item) => this.convertJob(item));
    }
  };

  async fetchPage(id: string): Promise<Page> {
    return await this.client.getEntry(id).then((result) => {
      const entry: { sys: any; fields: any } = result;

      const page = {
        id: entry.sys.id,
        title: entry.fields.title,
        description: entry.fields.description,
        content: entry.fields.content,
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

  async fetchList(id: string): Promise<List> {
    return await this.client.getEntry(id).then((result) => {
      const entry: { sys: any; fields: any } = result;
      const itemType = entry.fields.items[0].sys.contentType.sys.id;

      const list = {
        title: entry.fields.title,
        items: this.convertListItems(itemType, entry.fields.items),
      };
      return list;
    });
  }

  async fetchAsset(id: string): Promise<Asset> {
    return await this.client.getAsset(id).then((result) => {
      const asset: { sys: any; fields: any } = result;

      const image = {
        url: asset.fields.file.url,
        desc: asset.fields.description,
        width: asset.fields.file.details.image.width,
        height: asset.fields.file.details.image.height,
      };
      return image;
    });
  }
}
