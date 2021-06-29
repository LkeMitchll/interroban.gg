const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = async function bookmarks(limit) {
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

  function numberEntries(entries, offset) {
    entries.reverse().forEach((entry, i) => {
      const bookmark = entry;
      bookmark.fields.number = i + 1 + offset;
    });
    entries.reverse();
    return entries;
  }

  numberEntries(thisYear, lastYear.length + archive.length);
  numberEntries(lastYear, archive.length);
  numberEntries(archive, 0);

  return [
    {
      title: "2021",
      total: thisYear.length,
      bookmarks: thisYear,
    },
    {
      title: "2020",
      total: lastYear.length,
      bookmarks: lastYear,
    },
    {
      title: "Archive",
      total: archive.length,
      bookmarks: archive,
    },
  ];
};
