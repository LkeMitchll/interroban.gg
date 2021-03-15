# interroban.gg

Personal site, blog, and portfolio of Luke Mitchell, a design director, product designer, and UI developer.

This site pulls data from:

- Contentful: CMS
- Spotify & last.fm: Music stats
- FeedBin: Subscribed feed stats

This is a [Eleventy (11ty)](https://www.11ty.dev) project.

## Getting Started

First, install the bundle:

```bash
yarn install
```

Next, build the site:

```bash
yarn build:eleventy
```

To run a development environment:

```bash
yarn dev:eleventy
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.

## Netlify integration (recommended)

If you would like to develop the netlify functions locally you first need to install the [Netlify CLI](https://cli.netlify.com) and configure it for your site, you can then run:

```bash
yarn build
```

```bash
yarn dev
```

Open [http://localhost:8888](http://localhost:8888) with your browser to see the result.

...for a smoother dev experience.
