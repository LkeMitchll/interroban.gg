import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import styled from 'react-emotion'
import ds from '../assets/design-system'
import PageHeaderNav from '../components/page-header-nav'
import ListPost from '../components/list-post'

const Header = styled.header`
  display: flex;
  margin-bottom: ${ds.spacing.base};
`

class ListIndex extends React.Component {
  render() {
    const posts = this.props.data.allContentfulBlogPost.edges

    return (
      <React.Fragment>
        <Helmet>
          <title>Interrobang - List</title>
        </Helmet>
        <Header>
          <PageHeaderNav title="List" />
        </Header>
        {posts.map(({ node }) => {
          if (node.url) {
            return (
              <ListPost
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

ListIndex.propTypes = {
  data: PropTypes.object,
}

export default ListIndex

export const pageQuery = graphql`
  query ListIndexQuery {
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
