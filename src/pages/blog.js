import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import styled from 'react-emotion'
import ds from '../assets/design-system'
import PageHeaderNav from '../components/page-header-nav'
import BlogPost from '../components/blog-post'

const Header = styled.header`
  display: flex;
  margin-bottom: ${ds.spacing.base};
`

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlogPost.edges

    return (
      <React.Fragment>
        <Helmet>
          <title>Interrobang - Blog</title>
        </Helmet>
        <Header>
          <PageHeaderNav title="Blog" />
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
