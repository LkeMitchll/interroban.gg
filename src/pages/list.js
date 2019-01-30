import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import Layout from '../layouts/default'
import theme from '../themes/light'
import { Global, css } from '@emotion/core'
import PageHeader from '../components/PageHeader'
import shared from '../themes/shared'
import Grid from '../components/Grid'
import ListPost from '../components/ListPost'
import Footer from '../components/Footer'

class ListPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allContentfulBlogPost.edges

    return (
      <Layout>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              body,
              html {
                background-color: ${theme.colors.background};
                color: ${theme.colors.text};
              }
            `}
          />

          <PageHeader title={'List'} fixed />
          <Grid
            gridTemplateColumns={shared.grid.columns.two}
            gridGap={shared.space[0]}
            mb={shared.space[4]}
            pt={[0, shared.space[5]]}
          >
            {posts.map(post => {
              const p = post.node
              return (
                <ListPost
                  key={p.id}
                  title={p.title}
                  url={p.url}
                  tag={p.tag}
                  publishDate={p.publishDate}
                />
              )
            })}
          </Grid>
          <Footer />
        </ThemeProvider>
      </Layout>
    )
  }
}

ListPage.propTypes = {
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query ListPageQuery {
    allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          url
          publishDate
          tag
        }
      }
    }
  }
`

export default ListPage
