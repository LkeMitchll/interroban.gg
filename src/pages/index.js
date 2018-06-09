import React from 'react'
import get from 'lodash/get'
import PageSection from '../components/page-section'
import styled, { css } from 'react-emotion'
import ds from '../assets/design-system'

const AsideWrapper = styled.aside`
  background-color: black;
  margin-right: ${ds.spacing.base};
  padding: ${ds.spacing.small};
  width: 50%;
  justify-content: stretch;
`

const ContentWrapper = styled.section`
  padding: ${ds.spacing.base} ${ds.spacing.small};
  width: 50%;
  min-height: 100vh;
`

class RootIndex extends React.Component {
  render() {
    const content = get(this, 'props.data.allContentfulPage.edges')
    let def, links
    let primaryContent = []

    content.map(({ node }) => {
      return node.sections.map(section => {
        if (section.id == 'c4GecG3k2esIkQIAU6AsMqe') {
          def = section
        } else if (section.id == 'c2KOByJZ1LqmAIME0gEKm6') {
          links = section
        } else {
          primaryContent.push(section)
        }
      })
    })

    return (
      <div className={css`display: flex;`}>
        <AsideWrapper>
          <PageSection inverted
            title={def.subtitle}
            content={def.content} />
          <PageSection inverted
            title={links.subtitle}
            links={links.links}/>
        </AsideWrapper>
        <ContentWrapper>
          {primaryContent.map(section => {
            return (
              <PageSection
                title={section.subtitle}
                content={section.content}
                projects={section.projects} />
            )
          })}
        </ContentWrapper>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPage(filter:{title: {eq: "Home"}}) {
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
            links {
              description
              url
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
          }
        }
      }
    }
  }
`
