var Metalsmith  = require('metalsmith');
var assets = require('metalsmith-assets');
var markdown = require('metalsmith-markdownit');
var babel = require('metalsmith-babel');
var postcss = require('metalsmith-postcss');
var fingerprint = require('metalsmith-fingerprint');
var layouts = require('metalsmith-layouts');

var site = Metalsmith(__dirname)
  .source('./src')
  .destination('./dist')
  .ignore('css')
  .use(assets({
    source: './assets'
  }))
  .use(markdown('default', { breaks: true, typographer: true }))
  .use(babel({
    presets: ["es2015"],
    minified: true
  }))
  .use(postcss({
    plugins: {
      'postcss-import': {},
      'postcss-cssnext': {},
      'postcss-clean': {}
    }
  }))
  .use(fingerprint({
    pattern: ['site.css', 'site.js']
  }))
  .use(layouts({
    engine: 'handlebars'
  }))

if (module.parent) {
  module.exports = site
} else {
  site.build(function (err) { if (err) throw err })
}
