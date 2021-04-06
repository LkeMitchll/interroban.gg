import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function bookmarks(limit) {
  const thisYear = await client
    .getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
      limit: limit || 1000,
      "sys.createdAt[gte]": "2021-01-01T00:00:00Z",
    })
    .then((result) => result.items);
  const lastYear = await client
    .getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
      limit: limit || 1000,
      "sys.createdAt[gte]": "2020-01-01T00:00:00Z",
      "sys.createdAt[lte]": "2021-01-01T00:00:00Z",
    })
    .then((result) => result.items);
  const archive = await client
    .getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
      limit: limit || 1000,
      "sys.createdAt[lte]": "2020-01-01T00:00:00Z",
    })
    .then((result) => result.items);

  return [
    {
      title: "2021",
      bookmarks: thisYear,
    },
    {
      title: "2020",
      bookmarks: lastYear,
    },
    {
      title: "Archive",
      bookmarks: archive,
    },
  ];
}

export default bookmarks();
