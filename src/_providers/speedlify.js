import Fetch from '@11ty/eleventy-fetch'

export default class SpeedlifyAPI {
  constructor () {
    this.url = 'https://www.11ty.dev/speedlify/api/6798b78.json'
  }

  async getLighthouseScore () {
    const request = Fetch(this.url, {
      duration: '1d',
      type: 'json'
    }).then((json) => json.lighthouse)
    return request
  }

  async getRank () {
    const request = Fetch(this.url, {
      duration: '1d',
      type: 'json'
    }).then((json) => json.ranks)

    return request
  }
}
