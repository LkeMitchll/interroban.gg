const Cache = require('@11ty/eleventy-fetch');

module.exports = async function carbon() {
  const result = Cache(
    'https://api.websitecarbon.com/b?url=https%3A%2F%2Finterroban.gg',
    {
      duration: '1m',
      type: 'json',
    },
  ).then((json) => json);

  return result;
};
