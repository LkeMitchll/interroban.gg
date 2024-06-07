import SpeedlifyAPI from '../_providers/speedlify.js'

function convertToPercentage (float) {
  return (float * 100).toFixed(0)
}

async function speedlify () {
  const api = new SpeedlifyAPI()
  const lighthouseRaw = await api.getLighthouseScore()
  const rank = await api.getRank()
  const lighthouse = {}

  lighthouse.performance = convertToPercentage(lighthouseRaw.performance)
  lighthouse.accessibility = convertToPercentage(lighthouseRaw.accessibility)
  lighthouse.bestPractices = convertToPercentage(lighthouseRaw.bestPractices)
  lighthouse.seo = convertToPercentage(lighthouseRaw.seo)

  return { lighthouse, rank }
}

export default speedlify()
