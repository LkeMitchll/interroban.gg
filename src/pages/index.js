import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import SocialMediaLinkList from '../components/SocialMediaLinkList'
import ProjectList from '../components/ProjectList'

class Homepage extends React.Component {
  render() {
    const { data } = this.props
    const node = data.allContentfulPage.edges[0].node
    const sections = node.sections

    return (
      <div>
        {sections.map(section => {
          switch (section.__typename) {
            case 'ContentfulPageHeader':
              return (
                <PageHeader
                  key={section.id}
                  title={section.title}
                  subtitle={section.subtitle}
                />
              )
            case 'ContentfulSocialMediaLinkList':
              return (
                <SocialMediaLinkList
                  key={section.id}
                  description={section.description}
                  links={section.links}
                />
              )
            case 'ContentfulProjectList':
              return (
                <ProjectList
                  key={section.id}
                  title={section.title}
                  projects={section.projects}
                />
              )
          }
        })}
      </div>
    )
  }
}

Homepage.propTypes = {
  data: PropTypes.object,
}

export default Homepage

export const PageQuery = graphql`
  query HomeQuery {
    allContentfulPage(filter: { title: { eq: "Home New" } }) {
      edges {
        node {
          sections {
            ... on ContentfulPageHeader {
              id
              title
              subtitle
            }
            ... on ContentfulSocialMediaLinkList {
              id
              links {
                id
                description
                url
              }
            }
            ... on ContentfulProjectList {
              id
              title
              projects {
                id
                title
                description {
                  childMarkdownRemark {
                    html
                  }
                }
                url
              }
            }
          }
        }
      }
    }
  }
`
