import {
  ContentfulClientApi,
  createClient,
  Entry,
  Asset as ContentfulAsset,
} from "contentful";
import {
  Page,
  Bookmark,
  List,
  Job,
  Asset,
  Roundup,
  JournalEntry,
  BlogPost,
  ReadingEntry,
  Project,
} from "./contentful.types";

export class ContentAPI {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }

  convertBookmark = (rawData: Entry<any>): Bookmark => {
    const rawPost = rawData.fields;
    return {
      id: rawData.sys.id,
      title: rawPost.title,
      url: rawPost.url,
      tag: rawPost.tag,
      date: rawPost.publishDate,
      notes: rawPost.notes ? rawPost.notes : null,
    };
  };

  convertJob = (rawData: Entry<any>): Job => {
    const rawJob = rawData.fields;

    return {
      id: rawData.sys.id,
      title: rawJob.title,
      period: rawJob.period,
      company: rawJob.company,
    };
  };

  convertReadingEntry = (rawData: Entry<any>): ReadingEntry => {
    const rawReadingEntry = rawData.fields;

    return {
      id: rawData.sys.id,
      title: rawReadingEntry.title,
      type: rawReadingEntry.type,
      author: rawReadingEntry.author,
      url: rawReadingEntry.url,
    };
  };

  convertJournalEntry = (rawData: Entry<any>): JournalEntry => {
    const rawEntry = rawData.fields;

    return {
      content: rawEntry.content,
      date: rawEntry.date,
    };
  };

  convertListItems = (
    type: string,
    data: Array<Entry<any>>,
  ): Array<Job | ReadingEntry | Project> => {
    switch (type) {
      case "job":
        return data.map((item) => this.convertJob(item));
      case "readingEntry":
        return data.map((item) => this.convertReadingEntry(item));
      case "project":
        return data.map((item) => this.convertProject(item));
    }
  };

  convertRoundup = (rawData: Entry<any>): Roundup => {
    const rawRoundup = rawData.fields;
    return {
      id: rawData.sys.id,
      title: rawRoundup.title,
      links: rawRoundup.links.map((link: Entry<any>) =>
        this.convertBookmark(link),
      ),
    };
  };

  convertBlogPost = (rawData: Entry<any>): BlogPost => {
    const rawPost = rawData.fields;
    return {
      id: rawData.sys.id,
      title: rawPost.title,
      slug: rawPost.slug,
      date: rawPost.date,
      content: rawPost.content,
      description: rawPost.description,
    };
  };

  convertProject = (rawData: Entry<any>): Project => {
    const rawProject = rawData.fields;
    return {
      id: rawData.sys.id,
      title: rawProject.title,
      image: this.convertImage(rawProject.image),
      blurb: rawProject.blurb,
      content: rawProject.description,
    };
  };

  convertImage = (rawData: ContentfulAsset): Asset => {
    const rawImage = rawData.fields;
    return {
      url: rawImage.file.url,
      desc: rawImage.description,
      width: rawImage.file.details.image.width,
      height: rawImage.file.details.image.height,
    };
  };

  async fetchPage(id: string): Promise<Page> {
    return await this.client.getEntry(id).then((result) => {
      const entry: Entry<any> = result;

      const page = {
        id: entry.sys.id,
        title: entry.fields.title,
        description: entry.fields.description,
        content: entry.fields.content ? entry.fields.content : null,
      };
      return page;
    });
  }

  async fetchBookmarks(limit = 1000): Promise<Array<Bookmark>> {
    return await this.client
      .getEntries({
        content_type: "blogPost",
        order: "-fields.publishDate",
        limit: limit,
      })
      .then((result) => {
        const posts = result.items.map((entry) => this.convertBookmark(entry));
        return posts;
      });
  }

  async fetchRoundups(): Promise<Array<Roundup>> {
    return await this.client
      .getEntries({
        content_type: "roundup",
        order: "-fields.date",
        limit: 1,
      })
      .then((result) => {
        const roundups = result.items.map((roundup) =>
          this.convertRoundup(roundup),
        );
        return roundups;
      });
  }

  async fetchBlogPostBySlug(slug: string): Promise<BlogPost> {
    return await this.client
      .getEntries({
        content_type: "post",
        "fields.slug": slug,
        limit: 1,
      })
      .then((result) => {
        const posts = result.items.map((post) => this.convertBlogPost(post));
        return posts[0];
      });
  }

  async fetchBlogPosts(limit = 100): Promise<Array<BlogPost>> {
    return await this.client
      .getEntries({
        content_type: "post",
        order: "-fields.date",
        limit: limit,
      })
      .then((result) => {
        const posts = result.items.map((post) => this.convertBlogPost(post));
        return posts;
      });
  }

  async fetchJournalEntry(): Promise<JournalEntry> {
    return await this.client
      .getEntries({
        content_type: "journalEntry",
        order: "-fields.date",
        limit: 1,
      })
      .then((result) => {
        const entries = result.items.map((entry) =>
          this.convertJournalEntry(entry),
        );
        return entries[0];
      });
  }

  async fetchList(id: string): Promise<List> {
    return await this.client.getEntry(id).then((result) => {
      const entry: Entry<any> = result;
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
      const asset: ContentfulAsset = result;

      return this.convertImage(asset);
    });
  }

  async fetchProject(id: string): Promise<Project> {
    return await this.client.getEntry(id).then((result) => {
      const raw: Entry<any> = result;

      return this.convertProject(raw);
    });
  }
}
