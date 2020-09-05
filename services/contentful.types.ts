export type Page = {
  id: string;
  title: string;
  description: string;
};

export type Bookmark = {
  id: string;
  title: string;
  url: string;
  tag: string;
  date: Date;
};
