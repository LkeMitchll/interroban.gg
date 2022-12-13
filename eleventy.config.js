// Setup .env file
require('dotenv').config();

module.exports = function config(eleventy) {
  // Eleventy plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-rss'));
  eleventy.addPlugin(require('eleventy-plugin-reading-time'));

  // Custom filters
  eleventy.addFilter('formatDate', require('./src/_filters/date'));
  eleventy.addFilter('starRating', require('./src/_filters/stars'));

  // Custom shortcodes
  eleventy.addAsyncShortcode('image', require('./src/_shortcodes/responsiveImage'));

  const md = require('markdown-it');
  eleventy.addPairedShortcode('sidenote', (content, number) => {
    const result = md({ html: true }).render(content);
    return `<aside id="sn-${number}" class="sidenote">
              <small>
                ${result}
              </small>
            </aside>`;
  });

  // Custom markdown renderer
  eleventy.amendLibrary('md', (mdLib) => mdLib
    .use(require('markdown-it-named-headings'))
    .use(require('markdown-it-external-links'), {
      externalClassName: null,
      externalTarget: '_blank',
      externalRel: 'nofollow noopener noreferrer',
      internalDomains: ['interroban.gg', 'localhost'],
    }));

  // Options
  return {
    dir: {
      input: 'src',
    },
    markdownTemplateEngine: 'njk',
  };
};
