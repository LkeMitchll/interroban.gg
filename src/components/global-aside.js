import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PageSection from './page-section'
import styled from 'react-emotion'
import ds from '../assets/design-system'

const AsideWrapper = styled.aside`
  background-color: black;
  background-image: linear-gradient(#181818 0%, #090909 100%);
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding: ${ds.spacing.small};
  height: auto;
  position: static;

  @media (min-width: ${ds.breakpoint.tablet}) {
    position: sticky;
    top: ${ds.spacing.small};
  }

  @media (min-width: ${ds.breakpoint.tablet}) and (max-width: ${ds.breakpoint
      .medium}) {
    height: calc(100vh - 7rem);
    padding: ${ds.spacing.base};
  }

  @media (min-width: ${ds.breakpoint.medium}) {
    height: calc(100vh - 11rem);
    padding: ${ds.spacing.large};
  }
`

class GlobalAside extends React.Component {
  render() {
    return (
      <AsideWrapper>
        <StaticQuery
          query={graphql`
            query AsideQuery {
              allContentfulPage(filter: { title: { eq: "Global" } }) {
                edges {
                  node {
                    sections {
                      id
                      subtitle
                      subtitleDecorativeContent
                      pinnedToBottom
                      content {
                        childMarkdownRemark {
                          html
                        }
                      }
                      links {
                        description
                        url
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data =>
            data.allContentfulPage.edges.map(({ node }) =>
              node.sections.map(section => (
                <PageSection
                  key={section.id}
                  inverted
                  title={section.subtitle}
                  level="1"
                  decoratedContent={section.subtitleDecorativeContent}
                  content={section.content}
                  links={section.links}
                  pinBottom={section.pinnedToBottom}
                />
              ))
            )
          }
        />
      </AsideWrapper>
    )
  }
}

export default GlobalAside
