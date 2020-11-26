import type { ReactNode } from "react";
import type { Document } from "@contentful/rich-text-types";

export type Page = {
  id: string;
  title: string;
  description?: Document;
  content?: Document;
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
  date: Date;
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
  content: Document;
};

export type RichTextChildren = Array<string | ReactNode>;
