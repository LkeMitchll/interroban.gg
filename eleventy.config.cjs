// Setup .env file
require('dotenv').config();

module.exports = function config(eleventy) {
  // Eleventy plugins
  eleventy.addPlugin(require('@11tyrocks/eleventy-plugin-lightningcss'), { nesting: true });
  eleventy.addPlugin(require('@11ty/eleventy-plugin-rss'));

  // Custom filters
  eleventy.addFilter('formatDate', require('./src/_filters/date.cjs'));
  eleventy.addFilter('starRating', require('./src/_filters/stars.cjs'));

  // Custom shortcodes
  eleventy.addAsyncShortcode('image', require('./src/_shortcodes/image.cjs'));

  eleventy.addCollection('postsWithoutNotes', (collectionAPI) => collectionAPI.getFilteredByTag('post').filter((item) => item.data.type !== 'Note'));
  eleventy.addCollection('notes', (collectionAPI) => collectionAPI.getFilteredByTag('post').filter((item) => item.data.type === 'Note'));

  const md = require('markdown-it');
  const mdOptions = { html: true, typographer: true };

  eleventy.setLibrary('md', md(mdOptions).use(require('markdown-it-anchor')));

  eleventy.addPairedShortcode('sidenote', (content, number) => {
    const result = md(mdOptions).render(content);
    return `<aside id="sn-${number}" class="sidenote">
              <small>
                ${result}
              </small>
            </aside>`;
  });

  // Options
  return {
    dir: {
      input: 'src',
    },
    markdownTemplateEngine: 'njk',
  };
};