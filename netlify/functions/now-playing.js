const SpotifyAPI = require("../../providers/spotify.js");

exports.handler = async () => {
  const api = new SpotifyAPI();
  const data = await api
    .getNowPlaying()
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP status ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((json) => {
      const artist = json.item.artists
        .map((_artist) => _artist.name)
        .join(", ");
      return {
        statusCode: 200,
        body: JSON.stringify({
          title: json.item.name,
          artist,
          cover: {
            url: json.item.album.images[1].url,
            width: json.item.album.images[1].width,
            height: json.item.album.images[1].height,
            alt: `Cover art for ${json.item.album.name} by ${artist}`,
          },
          url: json.item.external_urls.spotify,
        }),
      };
    })
    .catch((error) => ({
      statusCode: 204,
      body: JSON.stringify({ message: error }),
    }));

  return data;
};
