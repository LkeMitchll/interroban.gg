let contentfulConfig

try {
  contentfulConfig = require('./.contentful')
} catch (_) {
  contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    host: process.env.CONTENTFUL_HOST,
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig

  if (!spaceId || !accessToken) {
    throw new Error(
      'Contentful spaceId and the delivery token need to be provided.'
    )
  }
}

module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-emotion`,
      options: { "merge": "merge" }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
}
