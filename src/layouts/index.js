import React from 'react'
import PropTypes from 'prop-types'
import Container from '../components/container'
import PageSection from '../components/page-section'
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

const ContentWrapper = styled.section`
  padding: ${ds.spacing.large};

  @media (max-width: ${ds.breakpoint.small}) {
    padding: ${ds.spacing.small};
  }

  @media (max-width: ${ds.breakpoint.medium}) {
    padding: ${ds.spacing.base};
  }
`

class Template extends React.Component {
  render() {
    const data = this.props.data.allContentfulPage.edges
    let def, links

    data.map(({ node }) => {
      return node.sections.map(section => {
        if (section.id == 'c4GecG3k2esIkQIAU6AsMqe') {
          def = section
        } else if (section.id == 'c2KOByJZ1LqmAIME0gEKm6') {
          links = section
        }
      })
    })

    return (
      <Container>
        <AsideWrapper>
          <PageSection
            inverted
            title={def.subtitle}
            level="1"
            decoratedContent={def.subtitleDecorativeContent}
            content={def.content}
          />
          <PageSection
            inverted
            pinBottom
            title={links.subtitle}
            level="2"
            links={links.links}
          />
        </AsideWrapper>
        <ContentWrapper>{this.props.children()}</ContentWrapper>
      </Container>
    )
  }
}

Template.propTypes = {
  data: PropTypes.object,
  children: PropTypes.func,
}

export default Template

export const pageQuery = graphql`
  query LayoutQuery {
    allContentfulPage(filter: { title: { eq: "Global" } }) {
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
          }
        }
      }
    }
  }
`
