const github = require("../providers/github");

module.exports = async function commits() {
  const response = await github.client.request(
    "GET /repos/{owner}/{repo}/commits",
    {
      owner: "lkemitchll",
      repo: "interroban.gg",
      per_page: 5,
    }
  );

  const sanitisedData = response.data.map((child) => ({
    sha: child.sha.substr(0, 7),
    message: child.commit.message.split("\n")[0],
    url: child.html_url,
    date: child.commit.committer.date,
  }));

  return sanitisedData;
};
