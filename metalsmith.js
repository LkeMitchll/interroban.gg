/* eslint-disable */
var Metalsmith  = require('metalsmith');
var assets = require('metalsmith-assets');
var markdown = require('metalsmith-markdownit');
var postcss = require('metalsmith-postcss');
var layouts = require('metalsmith-layouts');
var cleanCSS = require('metalsmith-clean-css');
var inlineCSS = require('metalsmith-inline-css');

var site = Metalsmith(__dirname)
  .source('./src')
  .destination('./dist')
  .ignore('css')
  .use(assets({
    source: './assets'
  }))
  .use(markdown('default', {
    breaks: true,
    typographer: true
  }).use(require('markdown-it-abbr')))
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
    engine: 'handlebars'
  }))
  .use(inlineCSS())

if (module.parent) {
  module.exports = site
} else {
  site.build(function (err) { if (err) throw err })
}
