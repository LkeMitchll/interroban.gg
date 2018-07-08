import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../layouts/index'
import PageSection from '../components/page-section'

const RootIndex = ({
  data: {
    allContentfulPage: {
      edges: [
        {
          node: { globalAsideContent, sections },
        },
      ],
    },
  },
}) => {
  return (
    <Layout globalAsideContent={globalAsideContent}>
      <Helmet>
        <title>Interrobang - Luke Mitchell</title>
      </Helmet>
      {sections.map(section => (
        <PageSection
          altStyling={section.alternateAppearance}
          content={section.content}
          key={section.id}
          level="2"
          pinBottom={section.pinnedToBottom}
          projects={section.projects}
          title={section.subtitle}
        />
      ))}
    </Layout>
  )
}

RootIndex.propTypes = {
  data: PropTypes.object,
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPage(filter: { title: { eq: "Home" } }) {
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
          sections {
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
  }
`
