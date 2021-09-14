class NowPlaying extends HTMLElement {
  constructor() {
    super();

    // Get template content from DOM
    const template = document.getElementById("now-playing");
    const templateContent = template.content;

    // Create new Shadow Root
    this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );
  }

  connectedCallback() {
    this.getContent();
  }

  getContent() {
    // Fetch data from the URL
    return new Promise((res) => {
      fetch(this.getAttribute("url"))
        .then((response) => {
          if (response.status !== 200) {
            throw new Error(`HTTP status ${response.status}`);
          } else {
            return response.json();
          }
        })
        .then((json) => {
          this.renderContent(json);
          res();
        })
        .catch(() => null);
    });
  }

  renderContent(data) {
    // Render content into DOM
    const title = this.shadowRoot.getElementById("title");
    const artist = this.shadowRoot.getElementById("artist");

    title.setAttribute("href", data.url);
    title.textContent = data.title;

    artist.textContent = data.artist;
  }
}

customElements.define("now-playing", NowPlaying);
