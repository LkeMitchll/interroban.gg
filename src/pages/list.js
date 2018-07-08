import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../layouts/index'
import styled from 'react-emotion'
import ds from '../assets/design-system'
import PageHeaderNav from '../components/page-header-nav'
import ListPost from '../components/list-post'

const Header = styled.header`
  display: flex;
  margin-bottom: ${ds.spacing.base};
`

const ListIndex = ({
  data: {
    allContentfulPage: {
      edges: [
        {
          node: { globalAsideContent },
        },
      ],
    },
    allContentfulBlogPost: { edges },
  },
}) => {
  return (
    <Layout globalAsideContent={globalAsideContent}>
      <Helmet>
        <title>Interrobang - List</title>
      </Helmet>
      <Header>
        <PageHeaderNav title="List" />
      </Header>
      {edges.map(post => (
        <ListPost
          key={post.node.id}
          date={post.node.publishDate}
          url={post.node.url}
          title={post.node.title}
          tag={post.node.tag}
        />
      ))}
    </Layout>
  )
}

ListIndex.propTypes = {
  data: PropTypes.object,
}

export default ListIndex

export const pageQuery = graphql`
  query ListIndexQuery {
    allContentfulPage(filter: { title: { eq: "List" } }) {
      edges {
        node {
          globalAsideContent {
            id
            subtitle
            content {
              childMarkdownRemark {
                html
              }
            }
            projects {
              title
              description {
                childMarkdownRemark {
                  html
                }
              }
              url
            }
            pinnedToBottom
            alternateAppearance
          }
        }
      }
    }
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
