import React from 'react'
import get from 'lodash/get'
import PageSection from '../components/page-section'
import Logo from '../components/logo'
import styled, { css } from 'react-emotion'
import ds from '../assets/design-system'

const AsideWrapper = styled.aside`
  background-color: black;
  margin-right: ${ds.spacing.base};
  padding: ${ds.spacing.large};
  width: 50%;
  justify-content: stretch;
  background-image: linear-gradient(#181818 0%, #090909 100%);
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.section`
  padding: ${ds.spacing.large} ${ds.spacing.base};
  width: 50%;
  min-height: 100vh;
`

class RootIndex extends React.Component {
  render() {
    const content = get(this, 'props.data.allContentfulPage.edges')
    let def, links, footer
    let primaryContent = []

    content.map(({ node }) => {
      return node.sections.map(section => {
        if (section.id == 'c4GecG3k2esIkQIAU6AsMqe') {
          def = section
        } else if (section.id == 'c2KOByJZ1LqmAIME0gEKm6') {
          links = section
        } else if (section.id == 'c6kgP0kjluggCm0WI2oG6mm') {
          footer = section
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
            level="1"
            decoratedContent={def.subtitleDecorativeContent}
            content={def.content} />
          <PageSection inverted pinBottom isRowLayout
            title={links.subtitle}
            level="2"
            links={links.links}>
            <Logo />
          </PageSection>
        </AsideWrapper>
        <ContentWrapper>
          {primaryContent.map(section => {
            return (
            <PageSection
              title={section.subtitle}
              level="2"
              content={section.content}
                projects={section.projects} />
            )
          })}

          <PageSection altStyling pinBottom
            title={footer.subtitle}
            content={footer.content} />
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
            subtitleDecorativeContent
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
