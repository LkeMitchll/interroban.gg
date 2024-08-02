import fetch from "@11ty/eleventy-fetch";

async function carbon() {
  const result = fetch(
    "https://api.websitecarbon.com/b?url=https%3A%2F%2Finterroban.gg",
    {
      duration: "1d",
      type: "json",
    },
  ).then((json) => json);

  return result;
}

export default carbon();
