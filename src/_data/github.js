import { Octokit } from "@octokit/core";

async function commits() {
  const octokit = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

  const response = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: "lkemitchll",
    repo: "interroban.gg",
    per_page: 5,
  });

  const sanitisedData = response.data.map((child) => ({
    sha: child.sha.substr(0, 7),
    message: child.commit.message,
    url: child.html_url,
    date: child.commit.committer.date,
  }));

  return sanitisedData;
}

export default commits();
