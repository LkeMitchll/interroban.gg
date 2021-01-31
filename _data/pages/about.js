const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = function () {
  return client
    .getEntry("gs1BugZQXA8mN7DniEOFx")
    .then((result) => {
      return result;
    })
    .catch(console.error);
};
