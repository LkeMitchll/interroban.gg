var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var postcss = require('metalsmith-postcss');
var ignore = require('metalsmith-ignore');

var app = Metalsmith(__dirname)
  .source('./src')
  .destination('./dist')
  .use(markdown())
  .use(layouts({
    engine: 'handlebars'
  }))
  .ignore('css') // Don't copy imported CSS files
  .use(postcss({
    plugins: {
      'postcss-cssnext': {},
      'postcss-nested': {},
      'postcss-import': {}
    }
  }))

if (module.parent) {
  module.exports = app
} else {
  app.build(function (err) { if (err) throw err })
}
