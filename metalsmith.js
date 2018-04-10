/* eslint-disable */
var Metalsmith  = require('metalsmith');
var assets = require('metalsmith-assets');
var postcss = require('metalsmith-postcss');
var cleanCSS = require('metalsmith-clean-css');
var layouts = require('metalsmith-layouts');
var inlineCSS = require('metalsmith-inline-css');

var site = Metalsmith(__dirname)
  .source('./src')
  .destination('./dist')
  .ignore(['css', 'layouts'])
  .use(assets({
    source: './assets'
  }))
  .use(postcss({
    plugins: {
      'postcss-import': {},
      'postcss-cssnext': {}
    }
  }))
  .use(cleanCSS({
    cleanCSS: {
      level: 2
    }
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: 'src/layouts'
  }))
  .use(inlineCSS())

if (module.parent) {
  module.exports = site
} else {
  site.build(function (err) { if (err) throw err })
}
