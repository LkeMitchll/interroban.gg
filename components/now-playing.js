async function renderContent() {
  const title = document.getElementById("now-playing-title");
  const artist = document.getElementById("now-playing-artist");

  fetch("/.netlify/functions/now-playing")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`HTTP status ${response.status}`);
      } else {
        return response.json();
      }
    })
    .then((json) => {
      title.setAttribute("href", json.url);
      title.textContent = json.title;
      artist.textContent = json.artist;
    })
    .catch(() => null);
}

renderContent();
