import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function metaPosts() {
  return client
    .getEntries({
      content_type: "metaPost",
      order: "-fields.date",
    })
    .then((result) => result.items);
}

export default metaPosts();
