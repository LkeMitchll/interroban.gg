import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../layouts/index'
import PageSection from '../components/page-section'

class RootIndex extends React.Component {
  render() {
    const data = this.props.data.allContentfulPage.edges
    let contentSections = []

    data.map(({ node }) => {
      return node.sections.map(section => {
        contentSections.push(section)
      })
    })

    return (
      <Layout>
        <Helmet>
          <title>Interrobang - Luke Mitchell</title>
        </Helmet>
        {contentSections.map((section) => {
          return (
            <PageSection
              altStyling={section.alternateAppearance}
              content={section.content}
              key={section.id}
              level="2"
              pinBottom={section.pinnedToBottom}
              projects={section.projects}
              title={section.subtitle}
            />
          )
        })}
      </Layout>
    )
  }
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
