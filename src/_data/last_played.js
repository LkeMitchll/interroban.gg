import fetch from "@11ty/eleventy-fetch";

async function last_played() {
  const result = await fetch(
    'https://now-playing.interroban.gg/last-played',
    { duration: "1d", type: "json" }
  ).then((json) => json);

  return result;
}

export default last_played()
