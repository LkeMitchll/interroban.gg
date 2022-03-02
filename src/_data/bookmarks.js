const contentful = require("../_providers/contentful");

module.exports = async function bookmarks() {
  const data = [
    { title: "Current", bookmarks: [] },
    { title: "2022", bookmarks: [] },
    { title: "2021", bookmarks: [] },
    { title: "2020", bookmarks: [] },
    { title: "Archive", bookmarks: [] },
  ];
  const entries = await contentful.client
    .getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
      limit: 1000,
    })
    .then((result) => result.items);

  // Number the entries
  entries.reverse().forEach((entry, i) => {
    entry.fields.number = i + 1;
  });
  entries.reverse();

  // Sort the entries into year sorted arrays
  entries.forEach((entry) => {
    const year = entry.fields.publishDate.split("-")[0];

    if (year === "2022") {
      data[0].bookmarks.push(entry);
      data[1].bookmarks.push(entry);
    } else if (year === "2021") {
      data[2].bookmarks.push(entry);
    } else if (year === "2020") {
      data[3].bookmarks.push(entry);
    } else {
      data[4].bookmarks.push(entry);
    }
  });

  return data;
};
