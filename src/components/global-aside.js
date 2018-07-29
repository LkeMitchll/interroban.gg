import React from 'react'
import PropTypes from 'prop-types'
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
    padding: ${ds.spacing.large};
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
              allContentfulPageModule(
                filter: { moduleId: { eq: "Home: On the web" } }
              ) {
                edges {
                  node {
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
          `}
          render={data => [
            <PageSection
              key={this.props.dynamicContent.id}
              inverted
              title={this.props.dynamicContent.subtitle}
              level="1"
              decoratedContent={
                this.props.dynamicContent.subtitleDecorativeContent
              }
              content={this.props.dynamicContent.content}
              links={this.props.dynamicContent.links}
              pinBottom={this.props.dynamicContent.pinnedToBottom}
              animated
            />,
            data.allContentfulPageModule.edges.map(({ node }) => (
              <PageSection
                key={node.id}
                inverted
                title={node.subtitle}
                level="3"
                decoratedContent={node.subtitleDecorativeContent}
                content={node.content}
                links={node.links}
                pinBottom={node.pinnedToBottom}
                animated
              />
            )),
          ]}
        />
      </AsideWrapper>
    )
  }
}

GlobalAside.propTypes = {
  dynamicContent: PropTypes.object,
}

export default GlobalAside
