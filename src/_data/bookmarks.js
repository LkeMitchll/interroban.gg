const contentful = require("../providers/contentful");

module.exports = async function bookmarks(limit) {
  const thisYear = await contentful.client
    .getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
      limit: 1000,
      "sys.createdAt[gte]": "2021-01-01T00:00:00Z",
    })
    .then((result) => result.items);
  const lastYear = await contentful.client
    .getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
      limit: 1000,
      "sys.createdAt[gte]": "2020-01-01T00:00:00Z",
      "sys.createdAt[lte]": "2021-01-01T00:00:00Z",
    })
    .then((result) => result.items);
  const archive = await contentful.client
    .getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
      limit: 1000,
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
      title: "Current",
      total: thisYear.length,
      bookmarks: thisYear,
      current: true,
    },
    {
      title: "2021",
      total: thisYear.length,
      bookmarks: thisYear,
      current: true,
    },
    {
      title: "2020",
      total: lastYear.length,
      bookmarks: lastYear,
      current: false,
    },
    {
      title: "Archive",
      total: archive.length,
      bookmarks: archive,
      current: false,
    },
  ];
};
