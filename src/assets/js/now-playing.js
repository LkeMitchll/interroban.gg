class LastFmNowPlaying extends HTMLElement {
  connectedCallback() {
    fetch("https://interrobang-now-playing.interrobang.workers.dev/now-playing")
      .then((response) => response.json())
      .then((data) => {
        if (data?.title && data.artist) {
          const imageSlot = this.querySelector("[data-cover]");
          imageSlot.src = data.albumArt;

          const titleLinkSlot = this.querySelector("[data-track]");
          titleLinkSlot.textContent = data.title;
          titleLinkSlot.href = data.url;

          const artistSlot = this.querySelector("[data-artist]");
          artistSlot.textContent = data.artist;

          const timeSlot = this.querySelector("[data-time]");
          timeSlot.textContent = "Playing now";
        }
      });
  }
}

customElements.define("now-playing", LastFmNowPlaying);
