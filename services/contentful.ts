import {
  Asset as ContentfulAsset,
  ContentfulClientApi,
  createClient,
  Entry,
} from "contentful";
import type {
  Asset,
  BlogPost,
  BlogPostPreview,
  Bookmark,
  Job,
  JournalEntry,
  List,
  Page,
  Project,
  ReadingEntry,
  Roundup,
  FixMe,
} from "./contentful.types";
import { formattedDate } from "helpers/date";

export function convertImage(rawData: ContentfulAsset): Asset {
  const rawImage = rawData.fields;
  return {
    url: rawImage.file.url,
    desc: rawImage.description,
    width: rawImage.file.details.image.width,
    height: rawImage.file.details.image.height,
  };
}

export class ContentAPI {
  client: ContentfulClientApi;

  constructor() {
    const isDev = process.env.NODE_ENV == "development";
    this.client = createClient({
      host: isDev ? "preview.contentful.com" : "cdn.contentful.com",
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: isDev
        ? process.env.CONTENTFUL_DEV_ACCESS_TOKEN
        : process.env.CONTENTFUL_ACCESS_TOKEN,
    });
  }

  convertBookmark = (rawData: Entry<Bookmark>): Bookmark => {
    const rawPost = rawData.fields;
    return {
      id: rawData.sys.id,
      title: rawPost.title,
      url: rawPost.url,
      tag: rawPost.tag,
      subtitle: rawPost.tag,
      publishDate: rawPost.publishDate,
      notes: rawPost.notes ? rawPost.notes : null,
    };
  };

  convertJob = (rawData: Entry<Job>): Job => {
    const rawJob = rawData.fields;

    return {
      id: rawData.sys.id,
      title: rawJob.title,
      period: rawJob.period,
      company: rawJob.company,
    };
  };

  convertReadingEntry = (rawData: Entry<ReadingEntry>): ReadingEntry => {
    const rawReadingEntry = rawData.fields;

    return {
      id: rawData.sys.id,
      title: rawReadingEntry.title,
      type: rawReadingEntry.type,
      author: rawReadingEntry.author,
      url: rawReadingEntry.url,
      subtitle: `${rawReadingEntry.type} - ${rawReadingEntry.author}`,
    };
  };

  convertJournalEntry = (rawData: Entry<JournalEntry>): JournalEntry => {
    const rawEntry = rawData.fields;

    return {
      content: rawEntry.content,
      date: rawEntry.date,
    };
  };

  convertListItems = (
    type: string,
    data: Entry<Job | ReadingEntry | Project>[]
  ): Job[] | ReadingEntry[] | Project[] => {
    switch (type) {
      case "job":
        return data.map((item: Entry<Job>) => this.convertJob(item));
      case "readingEntry":
        return data.map((item: Entry<ReadingEntry>) =>
          this.convertReadingEntry(item)
        );
      case "project":
        return data.map((item: Entry<Project>) => this.convertProject(item));
    }
  };

  convertRoundup = (rawData: Entry<Roundup>): Roundup => {
    const rawRoundup = rawData.fields;
    const bookmarks = rawRoundup.links.map((bookmark: unknown) => {
      return this.convertBookmark(bookmark as Entry<Bookmark>);
    });

    return {
      id: rawData.sys.id,
      title: rawRoundup.title,
      links: bookmarks,
    };
  };

  convertBlogPreviewPost = (
    rawData: Entry<BlogPostPreview>
  ): BlogPostPreview => {
    const rawPost = rawData.fields;
    return {
      id: rawData.sys.id,
      title: rawPost.title ? rawPost.title : null,
      slug: rawPost.slug ? rawPost.slug : null,
      date: rawPost.date ? rawPost.date : null,
      url: rawPost.slug ? `/post/${rawPost.slug}` : null,
      subtitle: rawPost.date
        ? formattedDate(rawPost.date, {
            month: "short",
            year: "numeric",
          })
        : null,
    };
  };

  convertBlogFullPost = (rawData: Entry<BlogPost>): BlogPost => {
    const rawPost = rawData.fields;
    return {
      id: rawData.sys.id,
      title: rawPost.title ? rawPost.title : null,
      slug: rawPost.slug ? rawPost.slug : null,
      date: rawPost.date ? rawPost.date : null,
      content: rawPost.content ? rawPost.content : null,
      description: rawPost.description ? rawPost.description : null,
    };
  };

  convertProject = (rawData: Entry<FixMe>): Project => {
    const rawProject = rawData.fields;
    return {
      id: rawData.sys.id,
      title: rawProject.title,
      image: convertImage(rawProject.image),
      blurb: rawProject.blurb,
      description: rawProject.description,
    };
  };

  async fetchPage(id: string): Promise<Page> {
    return await this.client.getEntry(id).then((entry: Entry<Page>) => {
      const page = {
        id: entry.sys.id,
        title: entry.fields.title,
        descriptionRich: entry.fields.descriptionRich
          ? entry.fields.descriptionRich
          : null,
        content: entry.fields.content ? entry.fields.content : null,
        lastUpdate: formattedDate(new Date(entry.sys.updatedAt), {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }),
      };
      return page;
    });
  }

  async fetchBookmarks(limit = 10, skip = 0): Promise<Bookmark[]> {
    return await this.client
      .getEntries({
        content_type: "blogPost",
        order: "-fields.publishDate",
        limit: limit,
        skip: skip,
      })
      .then((result) => {
        const posts = result.items.map((entry) =>
          this.convertBookmark(entry as Entry<Bookmark>)
        );
        return posts;
      });
  }

  async fetchBookmarkTotal(): Promise<number> {
    return await this.client
      .getEntries({
        content_type: "blogPost",
        limit: 1000,
      })
      .then((result) => {
        return result.total;
      });
  }

  async fetchRoundups(): Promise<Roundup[]> {
    return await this.client
      .getEntries({
        content_type: "roundup",
        order: "-fields.date",
        limit: 1,
      })
      .then((result) => {
        const roundups = result.items.map((roundup) =>
          this.convertRoundup(roundup as Entry<Roundup>)
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
        const posts = result.items.map((post) =>
          this.convertBlogFullPost(post as Entry<BlogPost>)
        );
        return posts[0];
      });
  }

  async fetchBlogPosts(limit = 100): Promise<BlogPostPreview[]> {
    return await this.client
      .getEntries({
        content_type: "post",
        order: "-fields.date",
        limit: limit,
      })
      .then((result) => {
        const posts = result.items.map((post) =>
          this.convertBlogPreviewPost(post as Entry<BlogPostPreview>)
        );
        return posts;
      });
  }

  async fetchBlogPostsFull(limit = 100): Promise<BlogPost[]> {
    return await this.client
      .getEntries({
        content_type: "post",
        order: "-fields.date",
        limit: limit,
      })
      .then((result) => {
        const posts = result.items.map((post) =>
          this.convertBlogFullPost(post as Entry<BlogPost>)
        );
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
          this.convertJournalEntry(entry as Entry<JournalEntry>)
        );
        return entries[0];
      });
  }

  async fetchList(id: string): Promise<List> {
    return await this.client.getEntry(id).then((entry: Entry<FixMe>) => {
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

      return convertImage(asset);
    });
  }

  async fetchProject(id: string): Promise<Project> {
    return await this.client.getEntry(id).then((result: Entry<Project>) => {
      return this.convertProject(result);
    });
  }
}
