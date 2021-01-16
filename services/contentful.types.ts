import type { ReactNode } from "react";
import type { Document } from "@contentful/rich-text-types";

export type FixMe = any; // eslint-disable-line @typescript-eslint/no-explicit-any

export type MarkdownWithImage = {
  markdown: string;
  images: string[];
};

export type Page = {
  id: string;
  title: string;
  descriptionRich?: Document;
  descriptionMarkdown?: string;
  content?: Document;
  contentMarkdown?: MarkdownWithImage;
  lastUpdate: string;
};

type BookmarkTag =
  | "Web design"
  | "Music"
  | "Book"
  | "Article"
  | "Resource"
  | "App"
  | "Inspiration"
  | "Project";

export type Bookmark = {
  id: string;
  title: string;
  url: string;
  tag: BookmarkTag;
  publishDate: Date;
  notes?: string;
  subtitle: BookmarkTag;
};

export type List = {
  title?: string | undefined;
  items: (Job | Project | ReadingEntry)[];
};

export type Job = {
  id: string;
  title: string;
  period: string;
  company: string;
};

export type Asset = {
  url: string;
  desc: string;
  width: number;
  height: number;
};

export type Roundup = {
  id: string;
  title: string;
  links: Bookmark[];
};

export type JournalEntry = {
  content: Document;
  date: Date;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  date: Date;
  content: Document;
  description: string;
};

export type BlogPostPreview = {
  id: string;
  title: string;
  slug: string;
  date: Date;
  url: string;
  subtitle: string;
};

export type ReadingEntry = {
  id: string;
  title: string;
  type: "Book" | "Article";
  author: string;
  url: string;
  subtitle: string;
};

export type Project = {
  id: string;
  title: string;
  blurb: string;
  image: Asset;
  description: Document;
};

export type RichTextChildren = Array<string | ReactNode>;
