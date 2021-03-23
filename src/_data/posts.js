import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function posts() {
  return client
    .getEntries({
      content_type: "post",
      order: "-fields.date",
    })
    .then((result) => {
      /* eslint no-param-reassign: "off" */
      result.items.forEach((item) => {
        const date = new Date(item.fields.date);
        item.fields.date = date;
      });
      return result.items;
    });
}

export default posts();
