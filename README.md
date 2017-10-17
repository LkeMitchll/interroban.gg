# www.interroban.gg

A simple [Metalsmith][mdocs] site.

## Setup

1. Clone repo
2. Run `yarn` to install dependencies to `./node_modules`
3. Run `yarn run update` to clone font submodule (private)

## Development

You can build the project by running `yarn run build`, this will
bundle the site into the `dist` folder.

Run `yarn run start` to start a local development server, it will
watch for changes, build the site and reload the page in
a browser (if you have Live Reload installed)

For more info read the [Metalsmith docs][mdocs]

CSS is processed using [PostCSS][postcss] with various plugins, most
notably:

- [postcss-cssnext][cssnext]
- [postcss-import][import]

The site is deployed with [dokku][dokku] using a `Dockerfile`, to test the deploy locally before pushing you can:

1. Setup [docker][docker] on your machine.
2. Run `yarn run docker:build`
3. Run `yarn run docker:start`
4. Open `http://localhost:1337` in a browser.
5. Stop the container with `docker stop [id]`

## Updating Content (CMS)

The site consists of a single page of markdown, stored on GitHub, which
is processed by Metalsmith with added templating and styling.

The file can be found [HERE][file].

[mdocs]: http://www.metalsmith.io
[postcss]: http://postcss.org
[cssnext]: http://cssnext.io
[import]: https://github.com/postcss/postcss-import
[file]: https://github.com/LkeMitchll/interroban.gg/blob/master/src/index.md
[dokku]: https://github.com/dokku/dokku
[docker]: https://www.docker.com
