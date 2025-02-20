# interroban.gg

Personal site of Luke Mitchell, a design director, product designer, and UI
developer.

This site pulls data from:

- last.fm: Music stats
- Feedbin: Subscribed feed stats
- Savee: Images for the scrapbook
- Letterboxd: Recently watched movies
- Literal: What I am currently reading
- Uploadcare: Image CDN

This is a [Eleventy (11ty)](https://www.11ty.dev) project.

## Getting Started

### Prerequisites

- Node.js v17+

### Build

First, install the bundle:

```bash
npm install
```

Next fill out your secret credentials:

```bash
cp env.example .env
open .env
```

Next, build the site:

```bash
npm run build
```

### Development

To run a development environment:

```bash
npm start
```

Open the address provided with your browser to see the result.
