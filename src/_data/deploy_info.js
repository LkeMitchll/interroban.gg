import fetch from "@11ty/eleventy-fetch";

function getLatestCommit() {
  if (process.env.CF_PAGES_COMMIT_SHA) {
    return process.env.CF_PAGES_COMMIT_SHA.slice(0, 7);
  }
}

async function latest_deployment_date() {
  const result = await fetch(process.env.DEPLOY_INFO_URL, {
    duration: "1d",
    type: "json",
    fetchOptions: {
      headers: {
        Authorization: `Bearer ${process.env.DEPLOY_INFO_KEY}`,
      },
    },
  }).then((json) => json);

  return result.result[0].created_on;
}

export default {
  latest_commit: getLatestCommit(),
  latest_deployment_date: latest_deployment_date(),
};
