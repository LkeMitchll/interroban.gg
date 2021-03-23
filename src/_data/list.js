import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function list() {
  return client
    .getEntries({ content_type: "list" })
    .then((result) => result.items);
}

export default list();
