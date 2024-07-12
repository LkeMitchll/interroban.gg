import 'dotenv/config'
import lightningCSSPlugin from '@11tyrocks/eleventy-plugin-lightningcss'
import RSSPlugin from '@11ty/eleventy-plugin-rss'
import WebMentionsPlugin from 'eleventy-plugin-webmentions'
import markdownIt from 'markdown-it'
import mdAnchor from 'markdown-it-anchor'
import dateFilter from './src/_filters/date.js'
import starFilter from './src/_filters/stars.js'
import responsiveImage from './src/_shortcodes/image.js'

const config = (eleventy) => {
  // Manually copy files
  eleventy.addPassthroughCopy('src/assets')

  // Eleventy plugins
  eleventy.addPlugin(lightningCSSPlugin)
  eleventy.addPlugin(RSSPlugin)
  eleventy.addPlugin(WebMentionsPlugin, {
    domain: 'interroban.gg',
    token: process.env.WEBMENTIONIO_TOKEN
  })

  // Custom filters
  eleventy.addFilter('formatDate', dateFilter)
  eleventy.addFilter('starRating', starFilter)

  // Custom shortcodes
  eleventy.addAsyncShortcode('image', responsiveImage)

  // Markdown config
  const mdOptions = { html: true, typographer: true }
  const md = markdownIt(mdOptions).use(mdAnchor)

  eleventy.setLibrary('md', md)

  eleventy.addPairedShortcode('sidenote', (content, number) => {
    const result = md.render(content)
    return `<aside id="sn-${number}" class="sidenote">
              <small>${result}</small>
            </aside>`
  })

  // Options
  return {
    dir: {
      input: 'src'
    },
    markdownTemplateEngine: 'njk'
  }
}

export default config
