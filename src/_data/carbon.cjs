const Fetch = require('@11ty/eleventy-fetch');

module.exports = async function carbon() {
  const result = Fetch(
    'https://api.websitecarbon.com/b?url=https%3A%2F%2Finterroban.gg',
    {
      duration: '1d',
      type: 'json',
    },
  ).then((json) => json);

  return result;
};
