const { Octokit } = require("@octokit/core");

const client = new Octokit({ auth: process.env.GITHUB_ACCESS_TOKEN });

module.exports = {
  client,
};
