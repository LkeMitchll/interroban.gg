import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import Layout from '../layouts/default'
import theme from '../themes/dark'
import { Global, css } from '@emotion/core'
import shared from '../themes/shared'
import Grid from '../components/Grid'
import PageHeader from '../components/PageHeader'
import SocialMediaLinkList from '../components/SocialMediaLinkList'
import Heading from '../components/Heading'
import ProjectList from '../components/ProjectList'

class Homepage extends React.Component {
  render() {
    const { data } = this.props
    const node = data.allContentfulPage.edges[0].node
    const sections = node.sections

    return (
      <Layout>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              body,
              html {
                background-color: ${theme.colors.background};
                color: ${theme.colors.text};
              }
            `}
          />
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
                  <SocialMediaLinkList key={section.id} links={section.links} />
                )
              case 'ContentfulProjectList':
                return (
                  <React.Fragment key={section.id}>
                    <Heading as="h3" color="text" mb={4}>
                      {section.title}
                    </Heading>
                    <Grid
                      mb={5}
                      gridTemplateColumns={shared.grid.columns.three}
                    >
                      <ProjectList
                        title={section.title}
                        projects={section.projects}
                      />
                    </Grid>
                  </React.Fragment>
                )
            }
          })}
        </ThemeProvider>
      </Layout>
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
                description
                url
                id
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
