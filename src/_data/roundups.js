import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function roundups() {
  return client
    .getEntries({
      content_type: "roundup",
      order: "-fields.date",
    })
    .then((result) => result.items);
}

export default roundups();
