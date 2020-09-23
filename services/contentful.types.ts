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
  items: Array<Job>;
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
  links: Array<Bookmark>;
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
};
