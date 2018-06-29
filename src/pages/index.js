import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../layouts/index'
import PageSection from '../components/page-section'

class RootIndex extends React.Component {
  render() {
    const data = this.props.data.allContentfulPage.edges
    let footer
    let primaryContent = []

    data.map(({ node }) => {
      return node.sections.map(section => {
        if (section.id == '8c9e623d-e2f8-56a6-bacd-b4ddd08abf52') {
          footer = section
        } else {
          primaryContent.push(section)
        }
      })
    })

    return (
      <Layout>
        <Helmet>
          <title>Interrobang - Luke Mitchell</title>
        </Helmet>
        {primaryContent.map((section, i) => {
          return (
            <PageSection
              key={i}
              title={section.subtitle}
              level="2"
              content={section.content}
              projects={section.projects}
            />
          )
        })}

        <PageSection
          altStyling
          pinBottom={footer.pinnedToBottom}
          title={footer.subtitle}
          content={footer.content}
        />
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
          }
        }
      }
    }
  }
`
