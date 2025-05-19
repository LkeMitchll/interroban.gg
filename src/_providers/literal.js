import Fetch from "@11ty/eleventy-fetch";

export default class LiteralAPI {
  constructor() {
    this.url = "https://literal.club/graphql/";
  }

  async getAccessToken() {
    const response = await Fetch(`${this.url}#token`, {
      duration: "150d",
      type: "json",
      fetchOptions: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation login($email: String!, $password: String!) {
              login(email: $email, password: $password) {
                token
              }
            }
        `,
          variables: {
            email: process.env.LITERAL_USER,
            password: process.env.LITERAL_PASSWORD,
          },
        }),
      },
    });

    return response.data.login.token;
  }

  async getReadingStates() {
    const accessToken = await this.getAccessToken();

    const response = await Fetch(this.url, {
      duration: "1d",
      type: "json",
      fetchOptions: {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          query myReadingStates {
            myReadingStates {
              status
              book {
                title
                cover
                slug
                authors {
                  name
                }
              }
            }
          }
        `,
        }),
      },
    });

    return response;
  }

  async getCurrentlyReadingBooks() {
    const data = await this.getReadingStates();

    const currentlyReading = data.data.myReadingStates.filter(
      (shelf) => shelf.status === "IS_READING",
    );

    return currentlyReading;
  }

  async getRecentlyReadBooks() {
    const data = await this.getReadingStates();

    const upNext = data.data.myReadingStates.reverse()
      .filter((shelf) => shelf.status === "FINISHED")
      .slice(0, 3);

    return upNext;
  }
}
