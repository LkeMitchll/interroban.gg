const Cache = require('@11ty/eleventy-fetch');

function numberedBookmarks(data) {
  data.forEach((entry, i) => {
    const e = entry;
    e.number = i;
  });
  return data;
}

module.exports = async function bookmarks() {
  const credentials = Buffer.from(
    `${process.env.BOOKMARKS_USER}:${process.env.BOOKMARKS_PASSWORD}`,
  ).toString('base64');

  const data = await Cache(
    `${process.env.BOOKMARKS_URL}/bookmarks?filter=published`,
    {
      duration: '1d',
      type: 'json',
      fetchOptions: {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      },
    },
  ).then((json) => numberedBookmarks(json));

  return data;
};
