const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const RECENT_TRACKS_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played";
const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
).toString("base64");

async function getAccessToken() {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=refresh_token&refresh_token=${process.env.SPOTIFY_REFRESH_TOKEN}`,
  });

  return response.json();
}

export async function getRecentTracks(): Promise<Response> {
  const { access_token } = await getAccessToken();

  return fetch(RECENT_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}
