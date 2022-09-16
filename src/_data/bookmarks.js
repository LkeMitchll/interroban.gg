const Cache = require('@11ty/eleventy-fetch');

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
  ).then((json) => {
    const result = {};
    json.forEach((entry, i) => {
      const e = entry;
      e.number = i;
      const date = new Date(e.date);
      const year = date.getFullYear();
      if (typeof result[year] === 'undefined') {
        result[year] = [];
      }
      result[year].push(e);
    });

    result.current = result['2022'];
    return result;
  });

  return data;
};
