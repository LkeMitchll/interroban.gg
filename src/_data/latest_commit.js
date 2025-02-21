function getLatestCommit() {
  if (process.env.CF_PAGES_COMMIT_SHA) {
    return process.env.CF_PAGES_COMMIT_SHA.slice(0,7)
  }
}

export default getLatestCommit()
