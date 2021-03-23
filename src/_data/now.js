import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function now() {
  return client
    .getEntries({
      content_type: "journalEntry",
      order: "-fields.date",
      limit: 1,
    })
    .then((result) => result.items[0]);
}

export default now();
