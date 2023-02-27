// Setup .env file
require('dotenv').config();

module.exports = function config(eleventy) {
  // Eleventy plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-rss'));

  // Custom filters
  eleventy.addFilter('formatDate', require('./src/_filters/date'));
  eleventy.addFilter('starRating', require('./src/_filters/stars'));

  // Custom shortcodes
  eleventy.addAsyncShortcode('image', require('./src/_shortcodes/image'));
  eleventy.addPairedShortcode('sidenote', (content, number) => {
    const md = require('markdown-it');
    const result = md({ html: true }).render(content);
    return `<aside id="sn-${number}" class="sidenote">
              <small>
                ${result}
              </small>
            </aside>`;
  });

  // Recognize CSS as a "template language"
  eleventy.addTemplateFormats('css');
  // Process CSS with LightningCSS
  eleventy.addExtension('css', {
    outputFileExtension: 'css',
    compile: async (_, inputPath) => {
      const { bundle } = require('lightningcss');
      return async () => {
        const { code } = bundle({ filename: inputPath, minify: true });
        return code;
      };
    },
  });

  // Custom markdown renderer
  eleventy.amendLibrary('md', (mdLib) => mdLib
    .use(require('markdown-it-external-links'), {
      externalTarget: '_blank',
      externalRel: 'nofollow noopener noreferrer',
      internalDomains: ['interroban.gg'],
    }));

  // Options
  return {
    dir: {
      input: 'src',
    },
    markdownTemplateEngine: 'njk',
  };
};
