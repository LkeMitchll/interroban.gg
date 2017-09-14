# www.interroban.gg

A simple [Metalsmith][mdocs] site.

## Setup

1. Clone repo
2. Run `yarn` to install dependencies to `./node_modules`
3. Initialise git submodules with `git submodule init`
4. Clone git submodules with `git submodule update`

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
- [postcss-nested][nested]

## Updating Content (CMS)

The site consists of a single page of markdown, stored as a GitHub Gist, which
is processed by Metalsmith with added templating and styling.

The Gist can be found [HERE.][gist] Alternatively you can run `yarn run cms`
to open the link.

Once edited and saved run `yarn run update` in the local repo to pull
down the changes.

[mdocs]: http://www.metalsmith.io
[postcss]: http://postcss.org
[cssnext]: http://cssnext.io
[import]: https://github.com/postcss/postcss-import
[nested]: https://github.com/postcss/postcss-nested
[gist]: https://gist.github.com/LkeMitchll/ce7c368203a26455b3b9e2ae1d40a779
