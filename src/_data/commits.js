const git = require('simple-git')();

module.exports = async function commits() {
  try {
    const history = await git.log({ maxCount: 5 });
    return history.all;
  } catch (e) {
    return null;
  }
};
