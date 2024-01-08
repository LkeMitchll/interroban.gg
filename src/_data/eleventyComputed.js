import simpleGit from 'simple-git';

const git = simpleGit();

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

const commits = async (data) => getChanges(data);

export default { commits };
