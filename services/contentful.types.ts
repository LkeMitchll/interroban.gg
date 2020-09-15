import { Document } from "@contentful/rich-text-types";

export type Page = {
  id: string;
  title: string;
  description: string;
  content: Document;
};

export type Bookmark = {
  id: string;
  title: string;
  url: string;
  tag: string;
  date: Date;
};
