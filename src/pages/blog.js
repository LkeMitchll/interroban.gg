import React from 'react'
import PropTypes from 'prop-types'
import Link from '../components/link.js'

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlogPost.edges

    return (
      <React.Fragment>
        <Link to="/">Back</Link>
        {posts.map(({ node }) => {
          if (node.url) {
            return (
              <article key={node.slug}>
                <Link to={node.url}>{node.title}</Link>
              </article>
            )
          }
        })}
      </React.Fragment>
    )
  }
}

BlogIndex.propTypes = {
  data: PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          url
          publishDate
        }
      }
    }
  }
`
