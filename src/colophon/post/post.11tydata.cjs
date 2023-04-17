const git = require('simple-git')();

async function getChanges(data) {
  const options = {
    file: data.page.inputPath,
    maxCount: 3,
  };

  try {
    const history = await git.log(options);
    return history.all;
  } catch (e) {
    return null;
  }
}

module.exports = {
  eleventyComputed: {
    commits: async (data) => getChanges(data),
  },
};
