import Fetch from '@11ty/eleventy-fetch';

export default class SaveeAPI {
  constructor() {
    this.url = 'https://savee.it/api/graphql/';
  }

  async getItems() {
    return Fetch(this.url, {
      duration: '1d',
      type: 'json',
      fetchOptions: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `{
            userByUsername(username: "interrobang") {
              items(limit: 50) {
                items {
                  _id
                  url
                  name
                  pageURL
                  asset {
                    _id
                    image {
                      thumbnail
                      width
                      ratio
                    }
                  }
                }
              }
            }
          }`,
        }),
      },
    });
  }
}
