# interroban.gg

Personal site, blog, and portfolio of Luke Mitchell, a design director, product
designer, and UI developer.

This site pulls data from:

- Contentful: CMS
- Spotify & last.fm: Music stats
- FeedBin: Subscribed feed stats
- GitHub: Commit history
- Savee: Images for the scrapbook

This is a [Eleventy (11ty)](https://www.11ty.dev) project.

## Getting Started

### Prerequisites

- Node.js v17+

First, install the bundle:

```bash
npm install
```

Next, build the site:

```bash
npm run build
```

To run a development environment:

First install the Netlify CLI:

```bash
npm install -g netlify
netlify link
```

...then run:

```bash
npm run dev
```

Open [http://localhost:8888](http://localhost:8888) with your browser to see
the result, thanks to Netlify CLI you should see the functions working also.
