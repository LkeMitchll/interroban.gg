# www.interroban.gg

A simple [Metalsmith][mdocs] site.

## Setup

1. Clone repo
2. Run `yarn` to install dependencies to `./node_modules`

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

## Updating Content (CMS)

The site consists of a single page of markdown, stored on GitHub, which
is processed by Metalsmith with added templating and styling.

The file can be found [HERE][file].

[mdocs]: http://www.metalsmith.io
[postcss]: http://postcss.org
[cssnext]: http://cssnext.io
[import]: https://github.com/postcss/postcss-import
[file]: https://github.com/LkeMitchll/interroban.gg/blob/master/src/index.md
