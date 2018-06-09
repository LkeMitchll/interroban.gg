import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import BlogPost from '../components/blog-post'
import { css } from 'react-emotion'
import ds from '../assets/design-system'

const navLink = css`
  display: inline-block;
  font-family: ${ds.typography.fontFamily.secondary};
  margin-bottom: ${ds.spacing.base};
`

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlogPost.edges

    return (
      <React.Fragment>
        <Link className={navLink} to="/">
          <span aria-hidden="true">{'<-'}</span> Back
        </Link>
        {posts.map(({ node }) => {
          if (node.url) {
            return (
              <BlogPost
                key={node.id}
                date={node.publishDate}
                url={node.url}
                title={node.title}
                tags={node.tags}
              />
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
    allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          title
          url
          publishDate
          tags
        }
      }
    }
  }
`
