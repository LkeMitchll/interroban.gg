import fetch from "node-fetch";

async function saveeFeed() {
  async function getFeed(token) {
    return fetch("https://api.savee.it/me/items/", {
      headers: {
        "Auth-Token": token,
      },
    }).then((response) => response.json());
  }

  async function auth() {
    return fetch("https://api.savee.it/auth/login/", {
      body: `{"username":"${process.env.SAVEE_USER}","password":"${process.env.SAVEE_KEY}"}`,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => json.data.auth_token);
  }

  return auth()
    .then((token) => getFeed(token))
    .then((json) => json.data);
}

export default saveeFeed;
