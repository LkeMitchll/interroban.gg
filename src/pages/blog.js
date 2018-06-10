import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Heading from '../components/heading'
import BlogPost from '../components/blog-post'
import styled, { css } from 'react-emotion'
import ds from '../assets/design-system'

const Header = styled.header`
  display: flex;
  margin-bottom: ${ds.spacing.base};

  h2 {
    margin-left: auto;
  }
`

const navLink = css`
  display: inline-block;
  font-family: ${ds.typography.fontFamily.secondary};
  text-decoration: none;
`

const linkText = css`
  text-decoration: underline;
`

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlogPost.edges

    return (
      <React.Fragment>
        <Header>
          <Link className={navLink} to="/">
            <span aria-hidden="true">&larr;</span>{' '}
            <span className={linkText}>Back</span>
          </Link>
          <Heading level="2">
            Blog
          </Heading>
        </Header>
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
