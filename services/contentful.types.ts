import { Document } from "@contentful/rich-text-types";

export type Page = {
  id: string;
  title: string;
  description: string;
  content?: Document;
};

export type Bookmark = {
  id: string;
  title: string;
  url: string;
  tag: string;
  date: Date;
  notes?: string;
};

export type List = {
  title: string;
  items: Array<any>;
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

export type ReadingEntry = {
  id: string;
  title: string;
  type: "Book" | "Article";
  author: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  blurb: string;
  image: Asset;
  content: Document;
};
