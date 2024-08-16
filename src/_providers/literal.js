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

  async getCurrentlyReadingBooks() {
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
              }
            }
          }
        `,
        }),
      },
    });

    const currentlyReading = response.data.myReadingStates.filter(
      (shelf) => shelf.status === "IS_READING",
    )[0];
    const upNext = response.data.myReadingStates
      .filter((shelf) => shelf.status === "WANTS_TO_READ")
      .slice(0, 5);

    return { currentlyReading, upNext };
  }
}
