import fetch from "@11ty/eleventy-fetch";

async function protected_content() {
  const result = await fetch(
    `${process.env.PCS_URL}`,
    {
      duration: "1d",
      type: "text",
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${process.env.PCS_KEY}`,
        },
      },
    },
  ).then((html) => html);

  return result;
}

export default protected_content();
