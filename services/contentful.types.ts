import { ReactNode } from "react";
import { Document } from "@contentful/rich-text-types";

export type Page = {
  id: string;
  title: string;
  description: Document;
  content?: Document;
};

export type Bookmark = {
  id: string;
  title: string;
  url: string;
  tag:
    | "Web design"
    | "Music"
    | "Book"
    | "Article"
    | "Resource"
    | "App"
    | "Inspiration"
    | "Project";
  date: Date;
  notes?: string;
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

export type RichTextChildren = Array<string | ReactNode>;
